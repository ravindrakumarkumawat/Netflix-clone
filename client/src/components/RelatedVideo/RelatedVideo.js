import React, { useState, useEffect } from 'react'
import './RelatedVideo.css'
import { relatedVideo } from '../../YoutubeApi'
import { Link } from 'react-router-dom'

function RelatedVideo({ related_vid }) {
  const [related, setRelated] = useState([])
  useEffect(() => {
    fetch(`${relatedVideo}${related_vid}`).then((responese) => responese.json()).then((res) => {
      const videolist = res.items.map(item =>  {return {id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.medium.url, channelId: item.snippet.channelId}})
      setRelated(videolist)
    })
  }, [])
  return (
    <div className='playlists'>
      <h3>You might also like</h3>
      <div className='videos'>
        {
          related.map((list) => 
            <Link to={`/watch/${list.id}`} key={list.id}>                
              <div className='playlistItem-container'>
                <div className='contents'>
                  <img src={list.thumbnail} alt={list.title} title={list.title} />
                  <div className='videoInfo'>
                    <h4>{list.title}</h4>
                  </div>
                </div>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default RelatedVideo