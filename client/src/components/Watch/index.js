import React, {useContext} from 'react'
import { useParams, Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import {AuthContext} from '../../context/authentication/authContextProvider'
function Watch() {
  const {v_id} = useParams()
  const {isSignedIn} = useContext(AuthContext)

  return (!isSignedIn) ? (
    <Redirect to='/register' />
  ):(
    <div className='watch-container'>
      <div className='back-browser-link'>        
        <Link to='/browse'>
          <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon> Back to browser
        </Link>
      </div>  
      <iframe title='something' src={`https://www.youtube.com/embed/${v_id}?vq=hd1080&controls=1&autoplay=1&loop=1&mute=0&cc_load_policy=0&playlist=${v_id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
    </div>
  )
}

export default Watch