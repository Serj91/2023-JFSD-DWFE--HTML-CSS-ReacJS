import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="container">
      <input
        className="search--input"
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="search"></div>
    </div>
  );
};

export default Searchbar;