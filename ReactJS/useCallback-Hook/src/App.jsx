import { useCallback, useState } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';
import Parent from './components/Parent';
import Counter from './components/Counter';
import Fetch from './components/FetchData';

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <br />

      <div>
        <ChildComponent buttonName="Click me"
          handleClick={increment} 
        />
      </div>
      <Parent />
      <Counter />
      <Fetch />
    </div>
    
  )
}

export default App
