import React from "react";
import './FaceRecog.css'

export const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma1'>
      <div className='absolute mt2' >
        <img id='inputimage' src={imageUrl} width='900px' height='auto' />
        <div className='bounding-box' style={box}></div>
      </div>
    </div>
  )
}