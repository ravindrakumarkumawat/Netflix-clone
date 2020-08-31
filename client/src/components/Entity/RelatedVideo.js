import React, { useState, useEffect } from 'react'
import './RelatedVideo.css'
import { relatedVideo } from '../../YoutubeApi'
import { Link } from 'react-router-dom'

function RelatedVideo({ related_vid }) {
  const [related, setRelated] = useState([])
  useEffect(() => {
    fetch(`${relatedVideo}${related_vid}`).then((responese) => responese.json()).then((res) => {
      const videolist = res.items.map(item =>  {return {id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.high.url, channelId: item.snippet.channelId}})
      setRelated(videolist)
    })
  }, [])
  return (
    <div className='preview-categories-container noScroll'>
      <div className='category'>
        <h3>You might also like</h3>
        <div className='entity'>
          <div className='entity-provider-container small'>
            {
              related.map((list) => 
                <Link to={`/watch/${list.id}`} key={list.id}>
                  <img src={list.thumbnail} alt={list.title} title={list.title} />
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedVideo