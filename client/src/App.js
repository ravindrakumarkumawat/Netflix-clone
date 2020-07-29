import React, { useState } from 'react'
import './App.css'
import Preview from './components/video/Preview'

// const videoCategories = 'https://www.googleapis.com/youtube/v3/videoCategories?key=&part=snippet&h1=in&regionCode=IN'
// const videos = 'https://www.googleapis.com/youtube/v3/videos?key=&part=snippet,contentDetails,statistics&regionCode=IN&chart=mostPopular&maxResults=10'                           
// const channelsById = 'https://www.googleapis.com/youtube/v3/channels?key=&part=snippet,contentDetails,statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw'
// const channelsByUsername = 'https://www.googleapis.com/youtube/v3/channels?key=&part=snippet,contentDetails,statistics&forUsername=GoogleDevelopers'
// const channelSectionsById = 'https://www.googleapis.com/youtube/v3/channelSections?key=&part=snippet,contentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw'
// const channelSectionsMine = 'https://www.googleapis.com/youtube/v3/channelSections?key=&part=snippet,contentDetails&mine=true'
// const playlistsAll = 'https://www.googleapis.com/youtube/v3/playlists?key=&part=snippet,contentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25'
const playlistItems = ''
const search = ''


function App() {
  const [categories, setCategories] = useState([])
  const [mostPopular, setMostPopular] = useState([])  

  // const all_categories = async () => {
  //   await fetch(videoCategories).then(response => response.json()).then(res => {
  //     setCategories(res.items)
  //   })
  // }

  // const mostPopularVideos = async () => {
  //   await fetch(videos).then(response => response.json()).then(res => {
  //     setMostPopular(res.items)
  //   })
  // }

  
  // all_categories()
  // mostPopularVideos()

  return (
    <div className="App">
      <Preview categories={categories} />
    </div>
  );
}

export default App
