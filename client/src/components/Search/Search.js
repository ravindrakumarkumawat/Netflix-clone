import React, { useState } from 'react'
import './Search.css'
import { search } from '../../YoutubeApi'

function Search() {
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
    const value = input
    if (value) {
      fetch(`${search}${value}`)
        .then(response => response.json())
        .then((res) => {
          const resdetails = res.items.map((item) => {
            return {
              videoId: item.id.videoId,
              channelId: item.snippet.channelId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high,
              channelTitle: item.snippet.channelTitle
            }
          })
          setResults(resdetails)
        })
    }
  }

  return (
    <>
      <div className='textbox-container'>
        <input 
            className='search-input' 
            type='text' 
            placeholder='Search for something...'
            value={input}
            onChange={(event) => handleChange(event)}
            onKeyPress={(event) => handleKeyPressed(event)} 
            />
      </div>
      <div className='results'>
      </div>
    </>
  )
}

export default Search