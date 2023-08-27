import express from 'express';
import mongoose from 'mongoose';
import Expense from './models/expenseSchema.js';
import expensesRoutes from './routes/expenses.js';

const app = express();

const mongoname = 'mongodb+srv://sachit:Mongo2023%2A@cluster0.zd9msxx.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoname)
.then((result) => app.listen(4000))
.catch((err) => console.log(err));




//middleware to log the requests that are coming in on/offscreen 
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();
})

//routes
app.use('/api/expenses', expensesRoutes)

