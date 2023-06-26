import React from "react"
import { useNavigate } from "react-router-dom"
import { Signin } from "../../components/Signin/Signin"

// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AuthLoginScreen = ({ setAuthenticated }: { setAuthenticated: any }) => {

  return (
      <Signin setAuthenticated={setAuthenticated} />

  )
}