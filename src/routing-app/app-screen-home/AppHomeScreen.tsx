import React from "react"
import { App } from "./App"
import { useNavigate } from "react-router-dom"

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppHomeScreen = () => {
  const navigate = useNavigate()
  return (
    <div>
      <App />
    </div>
  )
}