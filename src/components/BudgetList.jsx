// BudgetList.jsx

import React, { useState } from "react";

const BudgetList = ({ entries, deleteEntry, editEntry }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [updatedEntry, setUpdatedEntry] = useState({ description: "", amount: "", category: "" });

  const handleEditClick = (index) => {
    setIsEditing(index);
    setUpdatedEntry(entries[index]);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  const handleEditSubmit = (index) => {
    editEntry(index, updatedEntry);
    setIsEditing(null);
  };

  return (
    <div className="budget-list">
      <h2>Budget List</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {isEditing === index ? (
              <div>
                <input
                  type="text"
                  name="description"
                  value={updatedEntry.description}
                  onChange={handleEditChange}
                />
                <input
                  type="number"
                  name="amount"
                  value={updatedEntry.amount}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="category"
                  value={updatedEntry.category}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleEditSubmit(index)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{entry.description} - ${entry.amount} - {entry.category}</span>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <button onClick={() => deleteEntry(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
