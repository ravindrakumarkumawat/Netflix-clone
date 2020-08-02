import React from 'react'
import './Preview.css'

function Preview ({url}) {  
  return (
    <div className='preview-container'>
      <div className='preview-foreground'>
        <iframe src={`${url}?vq=hd1080&controls=0&autoplay=1&loop=1&mute=1&cc_load_policy=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>   
    </div>
  )
}

export default Preview