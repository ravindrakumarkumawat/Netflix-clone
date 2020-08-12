import React, { useState, useEffect } from 'react'
import './App.css'
import Preview from './components/Preview/Preview'
import Navbar from './components/navbar/Navbar'
import Categories from './components/Categories/Categories'
import Entity from './components/Entity/Entity'
import { videos, videoCategories } from './YoutubeApi'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom' 

function App() {
  const [catVideo, setCatVideo] = useState([])
  const [randomUrl, setRandomUrl] = useState('')

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

  return (
    <Router>
      <div className="App">  
        <Navbar /> 
        <Switch>
          <Route path="/" exact>          
            <Preview randomUrl={randomUrl} />
            <Categories catVideo={catVideo} /> 
          </Route>
          <Route path="/tv-shows" exact>  
            <h2>This is tv-shows</h2> 
          </Route>
          <Route path="/movies">
            <h2>lhis is movies page</h2>
          </Route>
          <Route path="/recently-added">
            <h2>lhis is recently page</h2>
          </Route>
          <Route path="/details/:v_id">                      
            <Entity />
          </Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App
