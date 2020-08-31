import React, { useState, useEffect } from 'react'
import './Search.css'
import { search, video, playlists, playlistItems } from '../../YoutubeApi'
import { Link } from 'react-router-dom'

function Search() {
  const [results, setResults] = useState([])
  const [input, setInput] = useState('')

  // useEffect(() => {
  //    setResults([])
  // }, [input])

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
      {
            results.map((result, index) =>
              <SearchProvider videoId={result.videoId} key={index}/>
            )
      }
      </div>
    </>
  )
}

function SearchProvider({ videoId }) {
  const [playItemVideo, setPlayItemVideo] = useState({})
  useEffect(() => {
    if(videoId) {      
    fetch(`${video}${videoId}`).then((response)=> response.json()).then((res) => {
      setPlayItemVideo({id: res.items[0].id, title: res.items[0].snippet.title, thumbnail: res.items[0].snippet.thumbnails.high.url, channelId: res.items[0].snippet.channelId, description: res.items[0].snippet.description})
    })
    }
  }, [])
  return (
      <>
      {
        playItemVideo.id && (
        <Link to={`/watch/${playItemVideo.id}`}>
          <div className='playlistItem-container'>
            <div className='contents'>          
              <img src={playItemVideo.thumbnail} alt={playItemVideo.title} title={playItemVideo.title} />
              <div className='videoInfo'>
                <h4>{playItemVideo.title}</h4>
                {/*<span>{playItemVideo.description}</span> */}
              </div>
            </div>
          </div> 
        </Link>
        )
      }
      </>
    )
  
}

export default Search