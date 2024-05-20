// useBudgetEntries.js

import { useState, useEffect } from "react";

const useBudgetEntries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("budgetEntries")) || [];
    setEntries(savedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem("budgetEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    const updatedEntries = [...entries, entry];
    setEntries(updatedEntries);
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const editEntry = (index, updatedEntry) => {
    const updatedEntries = entries.map((entry, i) => (i === index ? updatedEntry : entry));
    setEntries(updatedEntries);
  };

  return { entries, addEntry, deleteEntry, editEntry };
};

export default useBudgetEntries;
