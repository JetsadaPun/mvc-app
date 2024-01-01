// controllers/expenseController.ts
import { addExpense as addExpenseToModel, getExpenses as getExpensesFromModel, getRecentExpenses as getRecentExpensesFromModel } from '../models/expenseModel';

export const addExpense = (title: string, amount: string, date: string, details: string) => {
  addExpenseToModel(title, amount);  // Call addExpenseToModel with the correct number of arguments
};

export const getExpenses = () => {
  return getExpensesFromModel();
};

export const getRecentExpenses = (count: number) => {
  return getRecentExpensesFromModel(count);
};
