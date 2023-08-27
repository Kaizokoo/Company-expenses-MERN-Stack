import { useState } from 'react'

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const expense = {date, description, amount, currency}
    
    const response = await fetch('/api/expenses', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setDescription('')
      setAmount('')
      setCurrency('')
      setDate('')
      console.log('New expense added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Expense</h3>

      <label>Company Name [Description]:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
      />

      <label>Date:</label>
      <input 
        type="text" 
        onChange={(e) => setDate(e.target.value)} 
        value={date}
      />

      <label>Amount:</label>
      <input 
        type="text" 
        onChange={(e) => setAmount(e.target.value)} 
        value={amount} 
      />

      <label>Currency:</label>
      <input 
        type="text" 
        onChange={(e) => setCurrency(e.target.value)} 
        value={currency} 
      />

      <button>Add Expense</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ExpenseForm