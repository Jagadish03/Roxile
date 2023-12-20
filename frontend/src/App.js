import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Search from './components/Search';
import './styles.css';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('03'); // Default to March
  const [page, setPage] = useState(1);
  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="dashboard-container">
      <h1>Transaction Dashboard</h1>
      <Search onSearch={handleSearch} />
      <TransactionsTable search={searchText} selectedMonth={selectedMonth} 
      setPage={setPage}
      page={page}/>
    </div>
  );
};

export default App;
