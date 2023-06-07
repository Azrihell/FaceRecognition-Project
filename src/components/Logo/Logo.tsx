import React from 'react'
import Tilt from 'react-parallax-tilt'
import './Logo.css'
import headbrainlogo from './headbrainlogo.png'


export const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2'>
        <div className='Tilt-inner'><img style={{height: '150px', width: '125px'}} alt='logo' src= {headbrainlogo}></img></div>
      </Tilt>
    </div>
  )
}