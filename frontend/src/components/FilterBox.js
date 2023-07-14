import React, { useState } from "react";

function FilterBox({ filters, onApplyFilters }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterSelection = (filterCategory, filterValue) => {
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [filterCategory]: {
        ...(prevSelectedFilters[filterCategory] || {}),
        [filterValue]: !prevSelectedFilters[filterCategory]?.[filterValue],
      },
    }));
  };

  const handleApply = () => {
    // onApplyFilters(selectedFilters);
    setIsOpen(false);
  };

  return (
    <div className="filter-container">
      <div className="filter-bar">
        <button onClick={handleFilterToggle}>Filters</button>
      </div>
      {isOpen && (
        <div className="filter-dropdown">
          {Object.keys(filters).map((filterCategory) => (
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
