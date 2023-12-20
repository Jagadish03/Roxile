import React from 'react';

const Totals = ({ totalSaleAmount, totalSoldItems, totalNotSoldItems }) => {
  return (
    <div className="totals-container">
      <h2>Totals for the Selected Month</h2>
      <p>Total Amount of Sale: {totalSaleAmount}</p>
      <p>Total Sold Items: {totalSoldItems}</p>
      <p>Total Not Sold Items: {totalNotSoldItems}</p>
      
    </div>
  );
};

export default Totals;
