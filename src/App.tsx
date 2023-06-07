import React from 'react'
import './App.css'
import ParticlesBg from 'particles-bg'
import { Navigation } from './components/Nav/Navigation'
import { Logo } from './components/Logo/Logo'
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm'
import { Rank } from './components/Rank/Rank'

export const App = () => {
  return (
   
    <div className='App'>
      <ParticlesBg type="square" num ={15} bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    {/* <FaceRecognition /> */}

    </div>
  )
}

