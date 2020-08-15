import React, { useState, useEffect } from 'react'
import './Playlists.css'
import { playlists, playlistItems, video } from '../../YoutubeApi'

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
    <div className="playlists">
    {
      lists.map((playlist) => <h3 key={playlist.playlistId}>{playlist.playlistTitle}</h3>)
    }
    </div>
    
  )
}

function PlaylistItems({ playlistId }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${playlistItems}${playlistId}`).then((response)=> response.json()).then((res) => {
      const resPlayItemsVideo = res.items((item) => item.contentDetails.videoId)
      setItems(resPlayItemsVideo)
    })
  }, [])

  return (
    <h1>This shows the Item inside playlist</h1>
  )
}

function PlaylistItemProvider({ videoId }) {
  const [playItemVideo, setPlayItemVideo] = useState([])
  useEffect(() => {
    fetch(`${video}${videoId}`).then((response)=> response.json()).then((res) => {
      setPlayItemVideo({id: res.items[0].id, title: res.items[0].snippet.title, thumbnails: res.items[0].snippet.thumbnails.high, channelId: res.items[0].snippet.channelId})
    })
  }, [])

  return (
    <h1>This is particular video based on the id</h1>
  )
}

export default Playlists
