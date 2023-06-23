import React from "react"
import { Route, Routes } from "react-router-dom"

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
import { AuthLogoutScreen } from '../routing-auth/auth-screen-logout/AuthLogoutScreen'


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
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false)

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
            <Route path='login' element={<AuthLoginScreen />} />
            <Route path='logout' element={<AuthLoginScreen />} />
            <Route path='register' element={<AuthRegisterScreen />} />
          </Route>
          <Route path={"/*"} element={<AppErrorScreen />} />
        </Routes>
      ) : (
        <Routes>
          {/* these routes simulate login */}
          <Route element={<PortalOutlet />}>
            <Route index element={<PortalDashboardScreen />} />
            <Route path='settings' element={<PortalSettingScreen />} />
            <Route path={"/*"} element={<AppErrorScreen />} />
          </Route>
        </Routes>
      )}
    </div>
  )
}