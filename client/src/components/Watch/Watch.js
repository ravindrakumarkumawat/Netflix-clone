import React from 'react'
import { useParams } from 'react-router-dom'

function Watch() {
  const {v_id} = useParams()
  return (
    <div className='watch-container'>
      <iframe width='1365px' height='620px' title='something' src={`https://www.youtube.com/embed/${v_id}?vq=hd1080&controls=1&autoplay=1&loop=1&mute=0&cc_load_policy=0&playlist=${v_id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
    </div>
  )
}

export default Watch