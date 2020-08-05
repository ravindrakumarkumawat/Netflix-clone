import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './Preview.css'
import {videos} from '../../YoutubeApi'

function Preview (props) {   
  const [mostPopularVideos, setMostPopularVideos] = useState([])
  const [randomUrl, setRandomUrl] = useState('')
  const [mute, setMute] = useState(1)
  const [autoPlay, setAutoPlay] = useState(1)

  useEffect(() => {
    get_videos()
  }, [])

  const get_videos = async () => {
    await fetch(`${videos}&videoCategoryId=10`).then(response => response.json()).then(res => {      
      console.log('videos API...')
      const url = res.items.map(item => { return {id: item.id, title: item.snippet.localized.title} })
      setMostPopularVideos(url)
      setRandomUrl(url[Math.floor(Math.random() * url.length)])
    }).catch(error => console.log(error))
  }

  const toggleMute = () => {
    setMute(Number(!mute))
  }
  const togglePlay = () => {
    setAutoPlay(Number(!autoPlay))
  }

  return (
    <div className='preview-container'>
      <iframe src={`https://www.youtube.com/embed/${randomUrl.id}?vq=hd1080&controls=0&autoplay=${autoPlay}&loop=1&mute=${mute}&cc_load_policy=0&playlist=${randomUrl.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
      <div className='preview-overlay'>
        <div className='preview-main-details'>
          <h3>{randomUrl.title}</h3>
          <p>Video Subtitle</p>
          <div className='preview-overlay-buttons'>
            <button onClick={() => togglePlay()}>
            { !autoPlay ? <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
              : <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
            } 
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