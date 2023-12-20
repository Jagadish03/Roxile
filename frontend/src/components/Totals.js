import React from 'react';

const Totals = ({ totalAmount, totalSoldItems, totalNotSoldItems }) => {
  return (
    <div className="totals-container">
      <h2>Totals for the Selected Month</h2>
      <p>Total Amount of Sale: {totalAmount}</p>
      <p>Total Sold Items: {totalSoldItems}</p>
      <p>Total Not Sold Items: {totalNotSoldItems}</p>
    </div>
  );
};

export default Totals;
