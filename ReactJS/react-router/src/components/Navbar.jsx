import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li>
            <NavLink to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/about">
                About
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/1">
                Products
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
