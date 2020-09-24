import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Overview({title, id}) {

  return (
    <div className='Overview-container'>
      <p>
        {title}
      </p>
      <button>
      <Link to={`/watch/${id}`}><FontAwesomeIcon icon={faPlay} className='Icon-play'></FontAwesomeIcon> Play</Link>
      </button>
    </div>
)}

export default Overview