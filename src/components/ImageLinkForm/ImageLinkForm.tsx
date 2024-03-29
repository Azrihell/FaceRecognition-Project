import React from 'react';
import './ImageLinkForm.css'

export const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 center ma4'>{'This magic brain will detect faces in your pictures. Give it a try!'}</p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' placeholder='Your Image URL' onChange={(e) => onInputChange(e.target.value)} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={(e) => onButtonSubmit()}>Detect</button>
        </div>
      </div>
    </div>
  )
}