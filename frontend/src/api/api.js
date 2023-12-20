// src/api/api.js
export const getTransactions = async (month, search, page) => {
  try {
    const response = await fetch(`http://localhost:3001/api/transactions?month=${month}&search=${search}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

export const getStatistics = async (month) => {
  try {
    const response = await fetch(`http://localhost:3001/api/statistics?month=${month}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error;
  }
};

export const getBarChartData = async (month) => {
  try {
    const response = await fetch(`http://localhost:3001/api/bar-chart?month=${month}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    throw error;
  }
};

export const getPieChartData = async (month) => {
  try {
    const response = await fetch(`http://localhost:3001/api/pie-chart?month=${month}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    throw error;
  }
};
