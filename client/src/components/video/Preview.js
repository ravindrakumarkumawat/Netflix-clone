import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './Preview.css'

function Preview ({url}) {  
  return (
    <div className='preview-wrapper'>
      <ReactPlayer className='react-player' url={url} width='100%' height='100%'  />       
    </div>
  )
}

export default Preview