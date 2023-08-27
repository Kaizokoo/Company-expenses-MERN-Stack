import { useEffect, useState } from "react"

// components
import ExpenseDetails from "../components/ExpenseDetails.js"
import ExpenseForm from "../components/ExpenseForm.js"

const Home = () => {
  const [expenses, setExpenses] = useState(null)
  const minAmount = 0;
  const maxAmount = 6589762;
  
  useEffect(() => {
    const fetchExpenses = async () => {
      const response =await fetch(`/api/expenses?minAmount=${minAmount}&maxAmount=${maxAmount}`, {
        method: 'GET',
      });    
      const json = await response.json();

      if (response.ok) {
        setExpenses(json)
      }
    }

    fetchExpenses()
  }, [])

  return (
    <div className="home">
      <div className="expenses">
        {expenses && expenses.map(expense => (
          <ExpenseDetails expense={expense} key={expense._id} />
        ))}
      </div>
      <ExpenseForm />
    </div>
  )
}

export default Home