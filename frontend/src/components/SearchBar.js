import React from "react";

function SearchBar({ searchQuery, handleSearchQuery, selectedSearch, handleSelectedSearch, searchParams, onSearch }) {

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
        onChange={(e) => handleSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
      />

      <select
        value={selectedSearch}
        onChange={(e) => handleSelectedSearch(e.target.value)}
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
