const ExpenseDetails = ({ expense }) => {
    
   const handleClick = async () => {
    const response = await fetch('/api/expenses/' + expense._id, {
      method: 'DELETE'
    })}

    return (
      <div className="expense-details">
        <h4>{expense.description}</h4>
         <p><strong>Amount: </strong>{expense.amount}</p> 
         <p><strong>Currency (INR) </strong></p> 
        <p>{expense.date}</p>
        <span onClick = { handleClick }> Delete </span>
      </div>
    )
  }
  
  export default ExpenseDetails