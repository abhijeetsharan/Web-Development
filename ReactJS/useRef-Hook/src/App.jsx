import './App.css'
import Counter from './components/Counter'
import InputFocus from './components/InputFocus'
import PreviousState from './components/PreviousState'
import Stopwatch from './components/Stopwatch'

function App() {

  return (
    <div>
      <InputFocus />
      <Stopwatch />
      <Counter  />
      <PreviousState />
    </div>
  )
}

export default App
