import React from 'react'
import './Overview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Overview() {

  return (
    <div className='Overview-container'>
    <p>
      All he wants to do is leave town and start over. But first, he needs to
      deal with his ex, his new roomie and the enemies who want him dead.
    </p>
    <button>
      <FontAwesomeIcon icon={faPlay} className='Icon-play'></FontAwesomeIcon> Play
    </button>
  </div>
)}

export default Overview