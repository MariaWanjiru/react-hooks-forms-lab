import React from "react";

function Filter({ selectedCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}                     // controlled input
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        value={selectedCategory}           // controlled select
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
