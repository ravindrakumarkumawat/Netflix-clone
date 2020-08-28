import React from 'react'
import './Overview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Overview({title}) {

  return (
    <div className='Overview-container'>
      <p>
        {title}
      </p>
      <button>
      <FontAwesomeIcon icon={faPlay} className='Icon-play'></FontAwesomeIcon> Play
      </button>
    </div>
)}

export default Overview