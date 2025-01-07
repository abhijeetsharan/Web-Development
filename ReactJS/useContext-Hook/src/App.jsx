import { createContext, useState } from 'react';
import './App.css'
import ChildA from './components/ChildA';

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name: "Abhijeet"});'
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <div id='container' style={{backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
    // <>
    //   <UserContext.Provider value = {user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  )
}

export default App
export { ThemeContext }