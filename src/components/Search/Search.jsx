import React from "react";
import "./search.css";

const Search = ({ handleSearch }) => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for a car..."
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Search;
