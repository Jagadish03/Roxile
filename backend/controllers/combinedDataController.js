const axios = require('axios');
const {
  getBarChartData,
  getPieChartData,
  getStatistics,
} = require('./barChartController', './pieChartController', './statisticsController');

const getCombinedData = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ error: 'Month parameter is required' });
    }

    //axios to make parallel requests to three APIs
    const [barChartResponse, pieChartResponse, statisticsResponse] = await Promise.all([
      axios.get(`http://localhost:3001/api/bar-chart?month=${month}`),
      axios.get(`http://localhost:3001/api/pie-chart?month=${month}`),
      axios.get(`http://localhost:3001/api/statistics?month=${month}`),
    ]);

    // Extracting data from responses
    const barChartData = barChartResponse.data;
    const pieChartData = pieChartResponse.data;
    const statisticsData = statisticsResponse.data;

    // Combine the responses into a single object
    const combinedData = {
      barChart: barChartData,
      pieChart: pieChartData,
      statistics: statisticsData,
    };

    res.json(combinedData);
  } catch (error) {
    console.error('Error fetching combined data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCombinedData,
};
