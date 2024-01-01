// views/index.tsx
import { useEffect, useState } from 'react';
import { getExpenses, addExpense, getRecentExpenses } from '../controllers/expenseController';

const Home = () => {
  const [expenses, setExpenses] = useState<{ title: string; amount: string; timestamp: string }[]>([]);
  const [newExpense, setNewExpense] = useState<string>('');
  const [recentExpenses, setRecentExpenses] = useState<{ title: string; amount: string; timestamp: string }[]>([]);
  const [transactionType, setTransactionType] = useState<string>('');
  const [expenseDate, setExpenseDate] = useState<string>('');
  const [additionalDetails, setAdditionalDetails] = useState<string>('');
  const [expenseTitle, setExpenseTitle] = useState<string>('');

  useEffect(() => {
    setExpenses(getExpenses());
    setRecentExpenses(getRecentExpenses(5));
  }, []);

  const handleAddExpense = () => {
    if (transactionType === 'income') {
      addExpense(expenseTitle, `+${newExpense}`, expenseDate, additionalDetails);
    } else if (transactionType === 'expense') {
      addExpense(expenseTitle, `-${newExpense}`, expenseDate, additionalDetails);
    }

    setExpenses(getExpenses());
    setRecentExpenses(getRecentExpenses(5));
    setNewExpense('');
    setTransactionType('');
    setExpenseTitle('');
    setExpenseDate('');
    setAdditionalDetails('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='text-xl font-bold'>Expense Tracker</h1>
      <h2>Recent Expenses</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {recentExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form>
        <input
          type="text"
          required
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Amount"
          className="input input-bordered w-full max-w-xs"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
        <select
          value={transactionType}
          required
          onChange={(e) => setTransactionType(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="" disabled>
            Select Type
          </option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={handleAddExpense}
          className="btn btn-outline btn-success"
          disabled={!expenseTitle || !newExpense || !transactionType}
        >
          Add Transaction
        </button>
      </form>

    </div>
  );
};

export default Home;
