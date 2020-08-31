import React, { useState, useEffect } from 'react'
import './Playlists.css'
import { playlists, playlistItems, video } from '../../YoutubeApi'
import PlaylistItemProvider from './PlaylistItemProvider'

function Playlists({ v_id }) {
  const [lists, setLists] = useState([])

  useEffect(() => {
    get_playlist()
  }, [])
  
  const get_playlist = async () => {
    const randomUrl = await fetch(`${video}${v_id}`).then((response)=> response.json()).then(res => {
      return {id: res.items[0].id, title: res.items[0].snippet.title, thumbnails: res.items[0].snippet.thumbnails.high, channelId: res.items[0].snippet.channelId}
    })

    const res = await fetch(`${playlists}${randomUrl.channelId}`).then((response)=> response.json()).then((res) => res)
    const playList = res.items.map((item) => {
      return {playlistId: item.id, playlistTitle: item.snippet.title}
    })
    setLists(playList)
  }
  
  return (
    <>
    {
      lists.map((playlist) => 
        <div className='playlists' key={playlist.playlistId}>
          {/*<h3 key={playlist.playlistId}>{playlist.playlistTitle}</h3>*/}
          <PlaylistItems playlistId={playlist.playlistId} />
        </div>
      )
    }
    </>
  )
}

function PlaylistItems({ playlistId }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${playlistItems}${playlistId}`).then((response)=> response.json()).then((res) => {
      const resPlayItemsVideo = res.items.map((item) => item.contentDetails.videoId)
      setItems(resPlayItemsVideo)
    })
  }, [])

  return (     
    <div className='videos'>
      {
        items.map((item) => 
          <PlaylistItemProvider videoId={item} key={item} />        
        )
      }
    </div>
  )
}

export default Playlists
