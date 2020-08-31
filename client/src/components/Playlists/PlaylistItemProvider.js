import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { video } from '../../YoutubeApi'

function PlaylistItemProvider({ videoId }) {
  const [playItemVideo, setPlayItemVideo] = useState({})
  useEffect(() => {
    fetch(`${video}${videoId}`).then((response)=> response.json()).then((res) => {
      setPlayItemVideo({id: res.items[0].id, title: res.items[0].snippet.title, thumbnail: res.items[0].snippet.thumbnails.high.url, channelId: res.items[0].snippet.channelId, description: res.items[0].snippet.description})
    })
  }, [videoId])

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

export default PlaylistItemProvider