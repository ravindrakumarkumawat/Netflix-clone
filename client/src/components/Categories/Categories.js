import React, { useState, useEffect } from 'react'
import './Categories.css'
import { videos, videoCategories } from '../../YoutubeApi'

function Categories(props) {  
  const [categories, setCategories] = useState([])
  const [video, setVideo] = useState([])
  // const [selectCat, setSelectCat] = useState({})

  useEffect(() => {
    get_categories()
    get_videos()
  }, [])

  const get_categories = async () => {
    await fetch(videoCategories).then(response => response.json()).then(res => {      
      console.log('videoCategories API...')
      const catItems = res.items.map((item) => {return {id: item.id, title:item.snippet.title}})
      setCategories(catItems)
    }).catch(error => console.log(error))
  }

  const get_videos = async () => {
    await fetch(`${videos}&maxResults=50`).then(response => response.json()).then(res => { 
      const vid = res.items   
      setVideo(vid)
    }).catch(error => console.log(error))
  }

  return (
    <div className='preview-categories-container'>      
      <h1>Something about categories.......</h1>
    </div>
  )
}

export default Categories