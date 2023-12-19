// index.js
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const Transaction = require('./models/Transaction');
const transactionsController = require('./controllers/transactionsController');
const statisticsController = require('./controllers/statisticsController');

const router = express.Router();

// Transaction api
router.get('/transactions', transactionsController.listTransactions);
// statistics api
router.get('/statistics', statisticsController.getStatistics);

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;
const THIRD_PARTY_API_URL = process.env.THIRD_PARTY_API_URL;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Fetching data from the third-party API
    try {
      const response = await axios.get(THIRD_PARTY_API_URL);
      const transactionsData = response.data;

      
      await Transaction.insertMany(transactionsData); // Insert seed data into the database

      console.log('Database initialized with seed data');

      
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`); // Starting the Express server
      });
    } catch (error) {
      console.error('Error fetching or seeding data:', error);
    }
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  module.exports = router;
