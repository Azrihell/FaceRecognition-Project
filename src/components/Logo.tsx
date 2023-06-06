import React from 'react';
import Tilt from 'react-parallax-tilt'
import './Logo.css'


export const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2'>
        <div className='Tilt-inner'></div>
        <div style={{ height: '300px', backgroundColor: 'black' }}></div>
      </Tilt>
    </div>
  );
};