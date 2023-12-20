// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/products">Products</Link>
      <Link to="/pie-chart">Pie Chart</Link>
      <Link to="/bar-chart">Bar Chart</Link>
      <Link to="/statistics">Statistics</Link>
    </div>
  );
};

export default NavigationBar;
