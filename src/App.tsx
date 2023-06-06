import { useState } from 'react'
import './App.css'
import { Navigation } from './components/Navigation'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Logo />
    {/* <ImageLinkForm />
    <FaceRecognition /> */}

    </div>
  )
}

