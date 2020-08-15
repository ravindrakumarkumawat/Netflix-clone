import React, { useState, useEffect } from 'react'
import './Playlists.css'
import { playlists, playlistItems } from '../../YoutubeApi'

function Playlists({ channelId }) {
  const [lists, setLists, video] = useState([])

  useEffect(() => {
    fetch(`${playlists}${channelId}`).then((response)=> response.json()).then((res) => {
      const resPlaylist = res.items((item) => {
        return { playlistId: item.id, playlistTitle: item.snippet.title } 
      })
      setLists(resPlaylist)
    })
  }, [])

  return (
    <h1>This is playlists provider</h1>
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
