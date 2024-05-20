import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const ExpenseChart = ({ entries }) => {
  const data = entries.reduce((acc, entry) => {
    const existingCategory = acc.find(item => item.name === entry.category);
    if (existingCategory) {
      existingCategory.value += entry.amount;
    } else {
      acc.push({ name: entry.category, value: entry.amount });
    }
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseChart;
