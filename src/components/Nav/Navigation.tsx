import React from 'react'
import './Navigation.css'
import { Link, useNavigate } from "react-router-dom"

export const Navigation = () => {
  const navigate = useNavigate()
  
  return (
    <nav className='nav'><ul>
      <li><Link to='logout'>Log Out</Link></li>
      <li><Link to='/'>Dashboard</Link></li>
      </ul>
    </nav>
  )
}