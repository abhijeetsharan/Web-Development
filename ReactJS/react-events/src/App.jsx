import './App.css'

function App() {

  function handleClick() {
    alert('Button clicked!')
  }

  function handleMouseOver() {
    alert('Mouse over button')
  }

  return (
    <div>
      <button onClick={handleClick} onMouseOver={handleMouseOver}>
        Click me!
      </button>
    </div>
  )
}

export default App
