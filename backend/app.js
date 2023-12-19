const express = require('express');
const transactionsRoutes = require('./routes/transactionsRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');
const barChartRoutes = require('./routes/barChartRoutes');
const pieChartRoutes = require('./routes/pieChartRoutes');
const combinedDataRoutes = require('./routes/combinedDataRoutes');

const app = express();

// app.use middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api/transactions', transactionsRoutes);
app.use('/api/statistics', statisticsRoutes)
app.use('/api/bar-chart', barChartRoutes);
app.use('/api/pie-chart', pieChartRoutes);
app.use('/api/combined-data', combinedDataRoutes);

module.exports = app;
