// src/components/Dashboard.js
import React, { useState } from 'react';
import TransactionsTable from './TransactionsTable';
import MonthSelector from './MonthSelector';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('03');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Month selector */}
      <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      {/* Search bar */}
      <SearchBar search={search} setSearch={setSearch} />
      {/* Transactions table */}
      <TransactionsTable selectedMonth={selectedMonth} search={search} page={page} setPage={setPage} />
    </div>
  );
};

export default Dashboard;
