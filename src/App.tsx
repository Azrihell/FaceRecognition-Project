import React from 'react'
import './App.css'
import { Navigation } from './components/Nav/Navigation'
import { Logo } from './components/Logo/Logo'
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm'

export const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Logo />
      <ImageLinkForm />
    {/* <FaceRecognition /> */}

    </div>
  )
}

