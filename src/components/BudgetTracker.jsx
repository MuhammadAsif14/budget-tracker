// BudgetTracker.jsx

import React from "react";
import useBudgetEntries from "../hooks/useBudgetEntries";
import BudgetList from "./BudgetList";
import ExpenseChart from "./ExpenseChart";
import AddBudgetEntry from "./AddBudgetEntry";

const BudgetTracker = () => {
  const { entries, addEntry, deleteEntry, editEntry } = useBudgetEntries();

  return (
    <div className="budget-tracker">
      <AddBudgetEntry addEntry={addEntry} />
      <BudgetList entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      <ExpenseChart entries={entries} />
    </div>
  );
};

export default BudgetTracker;
