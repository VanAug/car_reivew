import React from 'react';

const Search = ({ handleSearch }) => {
  
  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Search for a car..." 
        onChange={(e) => handleSearch(e.target.value)} 
        style={{ padding: '8px', width: '300px', fontSize: '16px' }}
      />
    </div>
  );
};

export default Search;
