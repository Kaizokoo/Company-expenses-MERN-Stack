import express from 'express';
import Expense from '../models/expenseSchema.js';
import {
  getExpenses, 
  getExpense, 
  createExpense, 
  deleteExpense, 
  updateExpense
} from '../controllers/expenseControllers.js';

const router = express.Router()

// GET all expenses
router.get('/', getExpenses)

// GET a single expense
router.get('/:id', getExpense)

// POST a new expense
router.post('/', createExpense)

// DELETE a expense
router.delete('/:id', deleteExpense)

// UPDATE a expense
router.patch('/:id', updateExpense)


export default router;