import React, { useState } from 'react';

function ExpenseList({ expenses }) {
  const [sortBy, setSortBy] = useState('date');

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortBy === 'amount') return b.amount - a.amount;
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Expense List</h2>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        <option value="category">Category</option>
      </select>
      <ul>
        {sortedExpenses.map((expense, index) => (
          <li key={index}>
            {expense.category} - ${expense.amount} - {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
