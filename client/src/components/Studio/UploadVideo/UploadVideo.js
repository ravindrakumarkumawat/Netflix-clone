import React from 'react'
import './UploadVideo.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const UplaodVideo = () => {
  return ( 
    <div className='channel-container'>
      <div className='back-browser-link'>        
        <Link to='/browse'>
          <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon> Back to browser
        </Link>
      </div>  
      <div className='channel-header'>
        <div className='channel-img-container'>
          <img id="img" class="style-scope yt-img-shadow" alt="" width="80" src="https://yt3.ggpht.com/a-/AOh14Giv8ykBlqft5cPQg03jEOuGL_O8hbRRGIGpGBaO=s100-c-k-c0xffffffff-no-rj-mo"/>
          {/**
            Here should be conditional Image  */}
        </div>
      
        <div className="channel-name-container">
          <h1 className="channel-name">code.javascript</h1>
          <p className="channel-subscriber-count">No subscribers</p>
        </div>
      </div>
    </div>
  )
}

export default UplaodVideo