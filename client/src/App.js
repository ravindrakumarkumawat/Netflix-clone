import React, { useState, useEffect } from 'react'
import './App.css'
import Preview from './components/video/Preview'
import Navbar from './components/navbar/Navbar'

const baseUrl = 'https://www.googleapis.com/youtube/v3'
const key = 'AIzaSyATFWDHJZBoY2oKFZf_9zw8N0yCGQF6Z2I'
const videoCategories = `${baseUrl}/videoCategories?key=${key}&part=snippet&h1=us&regionCode=US`
const videos = `${baseUrl}/videos?key=${key}&part=snippet,contentDetails,statistics&regionCode=US&chart=mostPopular&maxResults=20`                           
// const channelsById = 'https://www.googleapis.com/youtube/v3/channels?key=&part=snippet,contentDetails,statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw'
// const channelsByUsername = 'https://www.googleapis.com/youtube/v3/channels?key=&part=snippet,contentDetails,statistics&forUsername=GoogleDevelopers'
// const channelSectionsById = 'https://www.googleapis.com/youtube/v3/channelSections?key=&part=snippet,contentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw'
// const channelSectionsMine = 'https://www.googleapis.com/youtube/v3/channelSections?key=&part=snippet,contentDetails&mine=true'
// const playlistsAll = 'https://www.googleapis.com/youtube/v3/playlists?key=&part=snippet,contentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25'
// const playlistItems = 'https://www.googleapis.com/youtube/v3/playlistItems?key=&part=snippet&id=&playlistId='
// const search = 'https://www.googleapis.com/youtube/v3/search?key=&part=snippet&maxResults=5&q=surfing'


function App() {
  const [categories, setCategories] = useState([])
  const [mostPopularVideos, setMostPopularVideos] = useState([])
  const [randomUrl, setRandomUrl] = useState('')

  useEffect(() => {
    get_categories()
    get_videos()
  }, [])
 
  const get_categories = async () => {
    await fetch(videoCategories).then(response => response.json()).then(res => {      
      console.log('videoCategories API...')
      const catItems = res.items.map((item) => item.snippet.title)
      setCategories(catItems)
    }).catch(error => console.log(error))
  }

  const get_videos = async () => {
    await fetch(videos).then(response => response.json()).then(res => {      
      console.log('videos API...')
      const url = res.items.map(item => item.id)
      setMostPopularVideos(url)
      setRandomUrl(url[Math.floor(Math.random() * url.length)])
    }).catch(error => console.log(error))

  }

  // mostPopularVideos()
  // console.log(mostPopularVideos)
  return (
    <div className="App">
    <header>
      <div className='header'>
        <Navbar />
        <Preview url={randomUrl}/>
      </div>
    </header>
    </div>
  );
}

export default App
