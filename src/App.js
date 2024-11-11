import React, { useState, useEffect } from 'react';
import BudgetSetter from './components/BudgetSetter';
import ExpenseForm from './components/ExpenseForm';
import ExpenseOverview from './components/ExpenseOverview';
import ExpenseList from './components/ExpenseList';

function App() {
  const [budget, setBudget] = useState();
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const remainingBudget = (budget - totalExpense) || 0;


  useEffect(() => {
    const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalExpense(expenseTotal);
  }, [expenses]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <BudgetSetter budget={budget} setBudget={setBudget} />
      <ExpenseForm addExpense={handleAddExpense} />
      <ExpenseOverview totalExpense={totalExpense} budget={budget} remainingBudget={remainingBudget} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
