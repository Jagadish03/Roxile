const Transaction = require('../models/Transaction');

const getStatistics = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ error: 'Month parameter is required' });
    }

    //to Calculate total sale amount
    const totalSaleAmount = await Transaction.aggregate([
      {
        $match: { dateOfSale: { $regex: new RegExp(`-${month}-`) } },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$price' },
        },
      },
    ]);

    //to Calculate total number of sold items
    const totalSoldItems = await Transaction.countDocuments({
      dateOfSale: { $regex: new RegExp(`-${month}-`) },
      sold: true,
    });

    //to Calculate total number of not sold items
    const totalNotSoldItems = await Transaction.countDocuments({
      dateOfSale: { $regex: new RegExp(`-${month}-`) },
      sold: false,
    });

    res.json({
      totalSaleAmount: totalSaleAmount[0]?.totalAmount || 0,
      totalSoldItems,
      totalNotSoldItems,
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getStatistics,
};
