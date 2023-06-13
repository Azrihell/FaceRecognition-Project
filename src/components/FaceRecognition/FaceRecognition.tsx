import React from "react";

export const FaceRecognition = ({imageUrl}) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
      <img src={imageUrl} width='500px' height='auto'/>
      </div>
    </div>
  )
}