import React, { useState, useEffect } from 'react'
import {video, relatedVideo } from '../../YoutubeApi'
import  PlaylistItemProvider from '../Playlists/PlaylistItemProvider'

function RelatedVideo({ related_vid }) {
  const [related, setRelated] = useState([])
  useEffect(() => {
    fetch(`${relatedVideo}${related_vid}`).then((responese) => responese.json()).then((res) => {
      const videolist = res.items.map(item =>  item.id.videoId)
      setRelated(videolist)
    })
  }, [])
  return (
    <div className='playlists'>
      <h3>You might also like</h3>
      <div className='videos'>
        {
          related.map((list) => 
            <PlaylistItemProvider videoId={list} key={list} /> 
          )
        }
      </div>
    </div>
  )
}

export default RelatedVideo