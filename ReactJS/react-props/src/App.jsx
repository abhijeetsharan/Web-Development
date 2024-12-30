import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className='container'>
      <Card name="Abhijeet Sharan">
        <h1>Best MERN Stack Course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Button handleClick={handleClick} text= "Click me!">
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
