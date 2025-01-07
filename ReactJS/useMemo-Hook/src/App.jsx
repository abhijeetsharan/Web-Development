import './App.css'
import Calculation from './components/Calculation'
import ExpensiveComputation from './components/ExpensiveComputation'
import FilterList from './components/FilterList'

function App() {

  return (
   <div>
    <ExpensiveComputation num={100} />
    <Calculation />
    <FilterList numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
   </div>
  )
}

export default App
