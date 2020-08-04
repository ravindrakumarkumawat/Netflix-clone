import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './Preview.css'

function Preview ({url}) { 
  const [mute, setMute] = useState(1)
  const [autoPlay, setAutoPlay] = useState(1)
  const toggleMute = () => {
    setMute(Number(!mute))
  }
  const togglePlay = () => {
    setAutoPlay(Number(!autoPlay))
  }
  return (
    <div className='preview-container'>
      <iframe src={`https://www.youtube.com/embed/${url}?vq=hd1080&controls=0&autoplay=${autoPlay}&loop=1&mute=${mute}&cc_load_policy=0&playlist=${url}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className='preview-overlay'>
        <div className='preview-main-details'>
          <h3>Video Title</h3>
          <p>Video Subtitle</p>
          <div className='preview-overlay-buttons'>
            <button onClick={() => togglePlay()}><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Play</button>
            <button onClick={() => toggleMute()}> {
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