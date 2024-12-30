import { useState } from 'react';
import './App.css'

function Greeting({name}) {
  function sayHello(customMessage) {
    alert(`${customMessage} ${name}!`);
  }
  
  return (
    <button onClick={() => sayHello('Hello')}>
      Greet {name}
    </button>
  );
}

function InputField() {
  const[value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Input : {value}</p>
    </div>
  );
}

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter text' />
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  function handleClick() {
    alert('Button clicked!')
  }

  function handleParent(){
    alert('Parent clicked!')
  }

  function handleChild(event){
    event.stopPropagation();
    alert('Child clicked!')
  }

  return (
    <div className="container" onClick={handleParent}>
      <button onClick={handleChild}>
        Click me!
      </button>
      <button onClick={handleClick}>
        Click me!
      </button>
      <Greeting name="User" />
      <InputField />
      <Form />
    </div>
  )
}

export default App