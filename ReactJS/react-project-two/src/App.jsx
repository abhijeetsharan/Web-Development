import UserCard from "./components/UserCard"
import './App.css'

function App() {

  return (
    <div className="container">
      <UserCard name="Abhijeet" desc="Abhijeet Sharan"/>
      <UserCard name="Shivam" desc="Shivam Kumar"/>
      <UserCard name="Rishi" desc="Rishi Raj"/>
    </div>
  )
}

export default App
