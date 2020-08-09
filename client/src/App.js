import React, { useState, useEffect } from 'react'
import './App.css'
import Preview from './components/Preview/Preview'
import Navbar from './components/navbar/Navbar'
import Categories from './components/Categories/Categories'
import Entity from './components/Entity/Entity'
import { videos, videoCategories } from './YoutubeApi'

function App() {
  const [catVideo, setCatVideo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState('')
  const [randomUrl, setRandomUrl] = useState('')
  const [entitySelected, setEntitySelected] = useState(false)

  useEffect(() => {   
    get_videos()  
  }, [])

  const get_videos = async () => {
      const res = await fetch(`${videos}&maxResults=50`)
                    .then(response => response.json())
                    .then(res => res)
                    .catch(error => console.log(error))

      let cat_videos = res.items
      let nextPageToken = res.nextPageToken
      let count = 0
      while(count < 3) {
        const res = await get_videos_by_pageToken(nextPageToken)
        nextPageToken = res.nextPageToken
        cat_videos = [...cat_videos, ...res.items]
        count++ 
      }
      
      const categories = await get_categories()
      
      const vi = {}
      for(let item of cat_videos) {
        if(vi.hasOwnProperty(item.snippet.categoryId)) {
          vi[item.snippet.categoryId].push({id: item.id, title:item.snippet.title, thumbnail: item.snippet.thumbnails.high})
        }
        else {
          vi[item.snippet.categoryId] = []
        }
      }
      
      const cat_video_list = []
      for(let cat of categories) {
        if(vi.hasOwnProperty(cat.id)) {
          cat_video_list.push({
            v_lists: vi[cat.id],
            c_id: cat.id,
            c_title: cat.title
          })
        }
      }
      const url = cat_video_list[Math.floor(Math.random() * cat_video_list.length)].v_lists
      setRandomUrl(url[Math.floor(Math.random() * url.length)])
      setCatVideo(cat_video_list)
  }

  const get_categories = () => {

    return fetch(videoCategories).then(response => response.json()).then(res => {      
      console.log('videoCategories API...')
      return res.items.map((item) => {return {id: item.id, title:item.snippet.title}})
    }).catch(error => console.log(error))  
  }

  const get_videos_by_pageToken = (nextPageToken) => {
    return fetch(`${videos}&maxResults=50&pageToken=${nextPageToken}`)
                    .then(response => response.json())
                    .then(res => res)
                    .catch(error => console.log(error))
  }

  const entity_selected = (list) => {
    setSelectedVideo(list)
    setEntitySelected(true)
  }

  return (
    <div className="App">        
          {
          !entitySelected ?
          <>           
            <Navbar />
            <Preview randomUrl={randomUrl} />
            <Categories catVideo={catVideo} onClick={(list) => entity_selected(list)} /> 
          </>
          :               
          <Entity entity={selectedVideo} />  
        }     
    </div>
  );
}

export default App
