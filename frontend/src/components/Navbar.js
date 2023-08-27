import { Link } from 'react-router-dom'

const Navbar = () => {

  function submitAmountfilter()
  {
    console.log(document.getElementById("FromAmt").value);
    console.log(document.getElementById("ToAmt").value);
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Company Expenses</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar