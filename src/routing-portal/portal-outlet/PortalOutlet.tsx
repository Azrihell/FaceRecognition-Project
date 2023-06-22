import React from "react"
import { Outlet } from "react-router"

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const PortalOutlet = () => {

  return (
    <div>
      --- Portal Navbar goes here ---
      <Outlet />
    </div>
  )
}