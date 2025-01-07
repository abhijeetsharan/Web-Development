import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

    const handleSettings = () => {
        navigate('/settings');
    }

  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
      <button onClick={handleSettings}>
        Settings
      </button>
    </div>
  )
}

export default Dashboard
