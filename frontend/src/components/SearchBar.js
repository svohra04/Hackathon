import React, { useState } from "react";

function SearchBar({ users, filters, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  filters = ["Name","PhoneNumber"]
  const handleSearch = () => {
    onSearch(searchQuery, selectedFilter);
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
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="">All</option>
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
