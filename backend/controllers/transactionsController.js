const Transaction = require('../models/Transaction');

const listTransactions = async (req, res) => {
  try {
    const { month, search, page, minPrice } = req.query;

    let filter = {};

    // Filter by month
    if (month) {
      filter.dateOfSale = { $regex: new RegExp(`-${month}-`) };
    }

    // Filter by title, description, and price
    if (search) {
      const searchRegExp = new RegExp(search, 'i');
      filter.$or = [
        { title: searchRegExp },
        { description: searchRegExp },
      ];
      
      const searchNumber = parseFloat(search);
      if (!isNaN(searchNumber)) {
        filter.$or.push({ price: searchNumber });
      }
    }

    // Filter by minimum price if valid number
    if (minPrice && !isNaN(minPrice)) {
      filter.price = { $gte: parseFloat(minPrice) };
    }

    // Pagination
    const perPage = 10;
    const currentPage = parseInt(page) || 1;
    const skip = (currentPage - 1) * perPage;

    // Query transactions
    const transactions = await Transaction.find(filter)
      .skip(skip)
      .limit(perPage);

    res.json({ transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  listTransactions,
};
