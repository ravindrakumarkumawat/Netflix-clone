import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './Preview.css'

function Preview ({url}) { 
  const [mute, setMute] = useState(true)
  return (
    <div className='preview-container'>
      <iframe src={`https://www.youtube.com/embed/${url}?vq=hd1080&controls=0&autoplay=0&loop=1&mute=1&cc_load_policy=0&playlist=${url}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className='preview-overlay'>
        <div className='preview-main-details'>
          <h3>Video Title</h3>

          <div className='preview-overlay-buttons'>
            <button><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Play</button>
            <button onClick={() => setMute(!mute)}> {
              (mute ? <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
              : <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
              )
            }            
            </button>
          </div>
        </div> 
      </div>   
    </div>
  )
}

export default Preview