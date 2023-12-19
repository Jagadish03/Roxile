const express = require('express');
const combinedDataController = require('../controllers/combinedDataController');

const router = express.Router();

router.get('/', combinedDataController.getCombinedData);

module.exports = router;
