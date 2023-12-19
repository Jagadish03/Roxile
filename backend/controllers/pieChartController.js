const Transaction = require('../models/Transaction');

const getPieChartStatistics = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ error: 'Month parameter is required' });
    }

    // Find unique categories and count the number of items for the selected month
    const pieChartData = await Transaction.aggregate([
      {
        $match: { dateOfSale: { $regex: new RegExp(`-${month}-`) } },
      },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({ pieChartData });
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getPieChartStatistics,
};
