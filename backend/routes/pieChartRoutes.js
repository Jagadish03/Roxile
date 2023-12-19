const pieChartController = require('../controllers/pieChartController');
const express = require('express');

const router = express.Router();

router.get('/', pieChartController.getPieChartStatistics); 

module.exports = router;
