import React from "react"
import { Outlet } from "react-router"

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppOutlet = () => {

  return (
    <div>
      --- App Navbar goes here ---
      <Outlet />
    </div>
  )
}