import React from 'react'
import './index.css'
import UploadVideo from './UploadVideo/UploadVideo'
import { Redirect } from 'react-router-dom'

function Studio ({isSignedIn, idToken}) {
  return (!isSignedIn && !idToken) ? (
    <Redirect to='/register' />
  ): (        
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