const express = require('express');
const barChartController = require('../controllers/barChartController');

const router = express.Router();

// Defining the route for getting bar chart data
router.get('/', barChartController.getBarChartData);

module.exports = router;
