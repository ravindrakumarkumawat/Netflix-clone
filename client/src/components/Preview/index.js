import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import {Link} from 'react-router-dom'

function Preview ({ randomUrl }) {   
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
      <iframe title={randomUrl.title} src={`https://www.youtube.com/embed/${randomUrl.id}?vq=hd1080&controls=0&autoplay=${autoPlay}&loop=1&mute=${mute}&cc_load_policy=0&playlist=${randomUrl.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
      <div className='preview-overlay'>
        <div className='preview-main-details'>
          <div className='preview-overlay-detail'>
            <h3>{randomUrl.channelTitle}</h3>
            <p>{randomUrl.title}</p>
          </div>
          <div className='preview-overlay-buttons'>
            <button onClick={() => togglePlay()} className='preview-play'>
              <Link to={`/watch/${randomUrl.id}`}><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Play</Link>
            </button>
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