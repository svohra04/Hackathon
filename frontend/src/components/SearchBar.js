import React, { useState } from "react";

function SearchBar({ searchParams, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("Name");

  const handleSearch = () => {
    onSearch(searchQuery, selectedSearch);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
      />

      <select
        value={selectedSearch}
        onChange={(e) => setSelectedSearch(e.target.value)}
      >
        {searchParams.map((param) => (
          <option key={param} value={param}>
            {param}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
