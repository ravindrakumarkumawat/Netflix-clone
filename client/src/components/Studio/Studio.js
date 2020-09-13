import React from 'react'
import './Studio.css'
import UploadVideo from './UploadVideo/UploadVideo'

function Studio () {
  return (        
    <div className='studioPane-container'>
      <div className='pane-wrapper'>
        <div className='studioPane-overlay'>
          <UploadVideo /> 
        </div>      
      </div>
    </div>
  )
}

export default Studio