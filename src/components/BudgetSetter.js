import React from 'react';

function BudgetSetter({ budget, setBudget }) {
  const handleBudgetChange = (e) => setBudget(Number(e.target.value));

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px ', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Set Monthly Budget</h2>
      <input type="number" value={budget} onChange={handleBudgetChange}  placeholder='Enter your  budget'style={{margin: '0 20px 0 0'}}/>
      <button style={{background: 'black', color: 'white'}}>Set Budget</button>
    </div>
  );
}

export default BudgetSetter;
