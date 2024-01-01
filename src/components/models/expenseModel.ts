// models/expenseModel.ts
let expenses: { title: string; amount: string; timestamp: string }[] = [];

export const addExpense = (title: string, amount: string) => {
  const timestamp = new Date().toLocaleString();
  expenses.push({ title, amount, timestamp });
};

export const getExpenses = () => {
  return expenses;
};

export const getRecentExpenses = (count: number) => {
  return expenses.slice(-count);
};
