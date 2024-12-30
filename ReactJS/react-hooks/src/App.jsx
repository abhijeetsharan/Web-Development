import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState('red');

  return (
    <div>
      <h1>Counter {color}</h1>
      <button onClick={() => setcolor('blue')}>Blue</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter

 