// components/MonthlySummary.jsx

import React from "react";

const MonthlySummary = ({ entries }) => {
  const currentMonth = new Date().getMonth();
  const monthlyEntries = entries.filter(entry => new Date(entry.date).getMonth() === currentMonth);
  const total = monthlyEntries.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <div className="monthly-summary">
      <h2>Monthly Summary</h2>
      <p>Total expenses for this month: ${total}</p>
    </div>
  );
};

export default MonthlySummary;
