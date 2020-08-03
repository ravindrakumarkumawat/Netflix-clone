import React from 'react'
import './Preview.css'

function Preview ({url}) {  
  return (
    <div className='preview-container'>
      <div className='preview-foreground'>
        <iframe width="1366" height="460" src={`https://www.youtube.com/embed/${url}?vq=hd1080&controls=0&autoplay=0&loop=1&mute=1&cc_load_policy=0&playlist=${url}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>   
    </div>
  )
}

export default Preview