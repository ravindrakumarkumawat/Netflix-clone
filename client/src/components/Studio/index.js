import React, {useContext} from 'react'
import './index.css'
import UploadVideo from './UploadVideo'
import { Redirect } from 'react-router-dom'
import {AuthContext} from '../../context/authentication/authContextProvider'
function Studio () {
  const {isSignedIn} = useContext(AuthContext)
  return (!isSignedIn) ? (
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