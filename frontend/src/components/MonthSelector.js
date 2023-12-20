// src/components/MonthSelector.js
import React, { useEffect, useState } from 'react';
import Totals from './Totals';
import { getTotals } from '../api/api';

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const [totals, setTotals] = useState({
    totalAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    // Fetch totals when selectedMonth changes
    const fetchTotals = async () => {
      try {
        const data = await getTotals(selectedMonth);
        setTotals(data);
      } catch (error) {
        console.error('Error fetching totals:', error);
      }
    };

    fetchTotals();
  }, [selectedMonth]);

  return (
    <div>
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>

      
      <Totals totalAmount={totals.totalAmount} totalSoldItems={totals.totalSoldItems} totalNotSoldItems={totals.totalNotSoldItems} />
    </div>
  );
};

export default MonthSelector;
