import React, { useState } from "react";

function FilterBox({ filters, onSearch, selectedFilters, handleSelectedFilters }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterSelection = (filterCategory, filterValue) => {
    handleSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [filterCategory]: {
        ...(prevSelectedFilters[filterCategory] || {}),
        [filterValue]: !prevSelectedFilters[filterCategory]?.[filterValue],
      },
    }));
  };

  const handleApply = () => {
    onSearch();
    setIsOpen(false);
  };

  return (
    <div className="filter-container">
      <div className="filter-bar">
        <button onClick={handleFilterToggle}>Filters</button>
      </div>
      {isOpen && (
        <div className="filter-dropdown">
          {Object.keys(filters && filters).map((filterCategory) => (
            <div key={filterCategory}>
              <h4>{filterCategory}</h4>
              {filters[filterCategory].map((filterValue) => (
                <label key={filterValue}>
                  <input
                    type="checkbox"
                    checked={
                      selectedFilters[filterCategory]?.[filterValue] || false
                    }
                    onChange={() =>
                      handleFilterSelection(filterCategory, filterValue)
                    }
                  />
                  {filterValue}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleApply}>Apply Filters</button>
        </div>
      )}
    </div>
  );
}

export default FilterBox;
