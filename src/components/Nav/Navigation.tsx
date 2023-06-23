import React from 'react'
import './Navigation.css'
import { useNavigate } from "react-router-dom"

export const Navigation = () => {
  const navigate = useNavigate()
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={() => navigate("logout")}className='f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
  )
}