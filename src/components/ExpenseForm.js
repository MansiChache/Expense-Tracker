import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ category, amount: parseFloat(amount), date });
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <select style={{margin: '0 20px 0 0'}} value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" style={{margin: '0 20px 0 0'}}>Select category</option>
        <option value="utilities">Utilities</option>
        <option value="gifts">Gifts</option>
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="groceries">Groceries</option>
        <option value="entertainment">Entertainment</option>
        <option value="fees">Fees</option>

        
      </select>
      <input type="number" style={{margin: '0 20px 0 0'}} placeholder='Enter the amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input style={{margin: '0 20px 0 0'}} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit" style={{background: 'black', color: 'white'}}>Add Expense</button>
    </form>
    </div>
  );
}

export default ExpenseForm;
