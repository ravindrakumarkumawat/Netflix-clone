import React, { useState } from 'react'
import './index.css'
import { search } from '../../YoutubeApi'
import  PlaylistItemProvider from '../Playlists/PlaylistItemProvider'
import { Link, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar'

function Search({isSignedIn, idToken, handleSignoutClick, user}) {
  const [results, setResults] = useState([])
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleKeyPressed = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    setResults([])
    const value = input
    if (value) {
      fetch(`${search}${value}`)
        .then(response => response.json())
        .then((res) => {
          const resId = res.items.map((item) => item.id)

          const videoId = []
          resId.forEach((item) => 
          {
            if(item.hasOwnProperty('videoId')) {
              videoId.push(item.videoId)
            } 
          })
          setResults(videoId)
        })
    }
  }

  return (!isSignedIn && !idToken) ? (
    <Redirect to='/register' />
  ):(
    <>
    <Navbar handleSignoutClick={handleSignoutClick} user={user}/>
    <div className='textbox-container'>
      <div className='back-browser-link'>        
        <Link to='/browse'>
          <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon> Back to browser
        </Link>
      </div>     
      <input
          className='search-input' 
          type='text' 
          placeholder='Search for something...'
          value={input}
          onChange={(event) => handleChange(event)}
          onKeyPress={(event) => handleKeyPressed(event)} 
          />
        
      <div className='results'> 
      {
            results.map((result, index) =>
              <PlaylistItemProvider videoId={result} key={index}/>
            )
      }
      </div>
    </div>
    </>
  )
}

export default Search