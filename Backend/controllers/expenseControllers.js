import Expense from '../models/expenseSchema.js';
import mongoose from 'mongoose';

// get all expenses
export const getExpenses = async (req, res) => {
  const expenses = await Expense.find().sort({createdAt: -1})
  res.status(200).json(expenses)
}

// get a single expense
export const getExpense = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such entry'})
  }

  const expense = await Expense.findById(id)

  if (!expense) {
    return res.status(404).json({error: 'No such entry'})
  }

  res.status(200).json(expense)
}

// create a new expense
export const createExpense = async (req, res) => {
    let {date, description, amount, currency} = req.body;
    console.log(req.body);
    if(currency === "INR")
    {amount = amount}
    else if ( currency === "MYR")
    {amount = amount * 18}
    else if (currency === "SGD")
    {amount = amount * 62}
    else if (currency === "JPY")
    {amount = amount * 0.6}
    else
    {amount = amount * 83}
  
  // add to the database
  try {
    const expense = await Expense.create({ date, description, amount, currency })
    res.status(200).json(expense)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a expense
export const deleteExpense = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such entry'})
  }

  const expense = await Expense.findOneAndDelete({_id: id})

  if(!expense) {
    return res.status(400).json({error: 'No such entry'})
  }

  res.status(200).json(expense)
}

// update a expense
export const updateExpense = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such entry'})
  }

  const expense = await Expense.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!expense) {
    return res.status(400).json({error: 'No such entry'})
  }

  res.status(200).json(expense)
}
