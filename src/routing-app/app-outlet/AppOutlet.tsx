import React from "react"
import { Outlet } from "react-router"
import { Navigation } from "../../components/Nav/Navigation"

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppOutlet = () => {

  return (
    <div>
      <Navigation/>
      <Outlet />
    </div>
  )
}