const express = require('express');
const statisticsController = require('../controllers/statisticsController');

const router = express.Router();

// Defining the route for getting statistics
router.get('/', statisticsController.getStatistics);

module.exports = router;
