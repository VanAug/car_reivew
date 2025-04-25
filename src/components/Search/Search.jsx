import React from "react";
import "./search.css";

const Search = ({ handleSearch }) => {
  return (
    <div style={{ marginBottom: "20px" }} className="search-container">
      <input
        type="text"
        placeholder="Search for a car..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
