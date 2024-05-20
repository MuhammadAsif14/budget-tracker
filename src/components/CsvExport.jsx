// components/CsvExport.jsx

import React from "react";
import { CSVLink } from "react-csv";

const CsvExport = ({ entries }) => {
  const headers = [
    { label: "Description", key: "description" },
    { label: "Amount", key: "amount" },
    { label: "Category", key: "category" },
    { label: "Date", key: "date" }
  ];

  const data = entries.map(entry => ({
    description: entry.description,
    amount: entry.amount,
    category: entry.category,
    date: entry.date
  }));

  return (
    <CSVLink data={data} headers={headers} filename={"budget-entries.csv"}>
      Export to CSV
    </CSVLink>
  );
};

export default CsvExport;
