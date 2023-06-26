import React from 'react';
import { useNavigate } from "react-router-dom"

export const Signin = ({ setAuthenticated }: { setAuthenticated: any }) => {
  const navigate = useNavigate()

  return (
    
      <div className="sans-serif w-90 white mw6 center relative cover bg-top mt7">
        <div id="overlay" className="absolute absolute--fill bg-navy o-70 z-unset"></div>
        <div className="relative pa4 pa5-m">
          <h1 className="serif tracked ma0 mb4 pv3">Sign In</h1>
          <form>
            <div className="mb3">
              <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Username</label>
              <input type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
            </div>
            <div className="mb4">
              <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
              <input type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
            </div>
            <div>
              <button onClick={() => setAuthenticated(true)} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Sign In</button>
            </div>
          </form>
          <div className="tc b f6 mt4 o-70 glow pa2 i">
            <p onClick={() => navigate('/register')} className="white pointer" >New Member? Register</p>
          </div>
        </div>
      </div>
  )
}