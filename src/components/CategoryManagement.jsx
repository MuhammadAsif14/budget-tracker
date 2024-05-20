// components/CategoryManagement.jsx

import React, { useState } from "react";

const CategoryManagement = ({ categories, addCategory, limits, setCategoryLimit }) => {
  const [newCategory, setNewCategory] = useState("");
  const [limit, setLimit] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory) return;
    addCategory(newCategory);
    setNewCategory("");
  };

  const handleSetLimit = (category) => {
    if (!limit) return;
    setCategoryLimit(category, parseFloat(limit));
    setLimit("");
  };

  return (
    <div className="category-management">
      <h2>Category Management</h2>
      <form onSubmit={handleAddCategory}>
        <input 
          type="text" 
          placeholder="New Category" 
          value={newCategory} 
          onChange={(e) => setNewCategory(e.target.value)} 
        />
        <button type="submit">Add Category</button>
      </form>
      <div className="limits">
        <h3>Set Category Limits</h3>
        {categories.map((category, idx) => (
          <div key={idx}>
            <span>{category}</span>
            <input 
              type="number" 
              placeholder="Limit" 
              value={limits[category] || ""} 
              onChange={(e) => setLimit(e.target.value)} 
            />
            <button onClick={() => handleSetLimit(category)}>Set Limit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryManagement;
