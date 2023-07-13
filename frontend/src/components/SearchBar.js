import React, { useState } from "react";

function SearchBar({ filters, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  // Update this to dynamically set default selected search
  const [selectedSearch, setSelectedSearch] = useState("Name");

  const handleSearch = () => {
    onSearch(searchQuery, selectedSearch);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />

      <select
        value={selectedSearch}
        onChange={(e) => setSelectedSearch(e.target.value)}
      >
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
