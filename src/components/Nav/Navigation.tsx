import React from 'react'
import './Navigation.css'
import { Link, useNavigate } from "react-router-dom"

export const Navigation = ({ setAuthenticated }: { setAuthenticated: any }) => {
  const navigate = useNavigate()
  
  return (

    <div className="dropdown">
    <button>Current Page</button>
    <div className="dropdown-content">
    <Link to='/'>Dashboard</Link>
    <Link to='home'>Face Detect!</Link>
    <Link to='logout' onClick={() => setAuthenticated(false)} >Log Out</Link>
    </div>
  </div>

    // <nav className='nav'><ul>
    //   <li><Link to='logout'>Log Out</Link></li>
    //   <li><Link to='/'>Dashboard</Link></li>
    //   </ul>
    // </nav>
  )
}