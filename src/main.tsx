import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavigationRoot } from './navigation/NavigationRoot'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import 'tachyons'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationRoot />
    </BrowserRouter>
  </React.StrictMode>,
)
