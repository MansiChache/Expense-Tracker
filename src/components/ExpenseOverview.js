import React from 'react';

function ExpenseOverview({ totalExpense = 0, budget = 0, remainingBudget = 0 }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Expenses Overview</h2>
      <p>Total Expenses: ${totalExpense.toFixed(2)}</p>
      <p>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
      {totalExpense >= 0.8 * budget && budget > 0 && (
        <p>80% of the budget has been utilized</p>
      )}
    </div>
  );
}

export default ExpenseOverview;
