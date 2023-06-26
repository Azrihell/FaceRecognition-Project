import React from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

// Application Navigator || App Imports
// =================================================================================================
// =================================================================================================
import { AppOutlet } from '../routing-app/app-outlet/AppOutlet'
import { AppHomeScreen } from '../routing-app/app-screen-home/AppHomeScreen'
import { AppErrorScreen } from '../routing-app/app-screen-error/AppErrorScreen'


// Application Navigator || Auth Imports
// =================================================================================================
// =================================================================================================
import { AuthOutlet } from '../routing-auth/auth-outlet/AuthOutlet'
import { AuthLoginScreen } from '../routing-auth/auth-screen-login/AuthLoginScreen'



// Application Navigator || Portal Imports
// =================================================================================================
// =================================================================================================
import { PortalOutlet } from '../routing-portal/portal-outlet/PortalOutlet'
import { PortalDashboardScreen } from '../routing-portal/portal-screen-dashboard/PortalDashboardScreen'
import { PortalSettingScreen } from '../routing-portal/portal-screen-settings/PortalSettingsScreen'
import { AuthRegisterScreen } from "../routing-auth/auth-screen-register/AuthRegisterScreen"



// Application Navigator || Define Exports
// =================================================================================================
// =================================================================================================
export const NavigationRoot = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false)

  const handleLogin = () => {
    navigate('/')
    setAuthenticated(true)
  }

  return (
    <div className="wrapper">
      {!isAuthenticated ? (
        <Routes>
          {/* This is our home page. */}
          <Route element={<AppOutlet />}>
            <Route index element={<AppHomeScreen />} />
          </Route>
          {/* These routes handle authentication */}
          <Route element={<AuthOutlet />}>
            <Route path='login' element={<AuthLoginScreen setAuthenticated={handleLogin} />} />
            <Route path='logout' element={<AuthLoginScreen setAuthenticated={handleLogin} />} />
            <Route path='register' element={<AuthRegisterScreen setAuthenticated={handleLogin} />} />
          </Route>
          <Route path={"/*"} element={<AppErrorScreen />} />
        </Routes>
      ) : (
        <Routes>
          {/* these routes simulate login */}
          <Route element={<PortalOutlet />}>
            <Route index element={<PortalDashboardScreen />} />
            <Route path='settings' element={<PortalSettingScreen />} />
            <Route path={"home"} element={<AppHomeScreen />} />
            <Route path={"/*"} element={<AppErrorScreen />} />
          </Route>
        </Routes>
      )}
    </div>
  )
}