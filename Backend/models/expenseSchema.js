import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    date: {
        type : String,
        required : true
    }    ,
    description: {
        type: String,
        required: true
    }    ,
    amount: {
        type: String,
        required: true
    }    ,
    currency: {
        type: String,
        required: true
    }
});

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense; 