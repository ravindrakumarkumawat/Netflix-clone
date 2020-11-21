import React, { useState, useEffect } from 'react'
import './index.css'
import Preview from '../Preview'
import DetailPane from '../DetailPane'
import { videos, videoCategories } from '../../YoutubeApi'
import {Redirect} from 'react-router-dom'
import Navbar from '../Navbar'
import EntityProvider from './EntityProvider'

const initialRow = {
  category: '',
  id: '',
  title: '',
  channelTitle: ''
}

function Categories({accessToken, idToken, isSignedIn, handleSignoutClick, user}) { 
  const [activeRow, setActiveRow] = useState(initialRow)
  const {
    category,
    id,
    title,
    channelTitle
  } = activeRow
  const setActive = (activeRow) => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initialRow)
  }

  const [catVideo, setCatVideo] = useState([])
  const [randomUrl, setRandomUrl] = useState('')
  
  useEffect(() => { 
    if(accessToken && idToken && isSignedIn) {
      get_videos() 
    } 
  }, [accessToken, idToken, isSignedIn])

  const get_videos = async () => {
      const response = await fetch(`${videos}&maxResults=50`)
      const data = await response.json()
      const res =  data

      let cat_videos = res.items
      // console.log(cat_videos)
      // let nextPageToken = res.nextPageToken
      // let count = 0
      // while(count < 3) {
      //   const res = await get_videos_by_pageToken(nextPageToken)
      //   nextPageToken = res.nextPageToken
      //   cat_videos = [...cat_videos, ...res.items]
      //   count++ 
      // }
      
      const categories = await get_categories()
      
      const vi = {}
      for(let item of cat_videos) {
        if(vi.hasOwnProperty(item.snippet.categoryId)) {
          vi[item.snippet.categoryId].push({
            id: item.id, 
            title:item.snippet.title, 
            channelTitle:item.snippet.channelTitle, 
            thumbnail: item.snippet.thumbnails.medium, 
            channelId: item.snippet.channelId
          })
        }
        else {
          vi[item.snippet.categoryId] = []
        }
      }
      
      const cat_video_list = []
      for(let cat of categories) {
        if(vi.hasOwnProperty(cat.id)) {
          if(vi[cat.id].length > 0) {            
            cat_video_list.push({
              v_lists: vi[cat.id],
              c_id: cat.id,
              c_title: cat.title
            })
          }
        }
      }
      const url = cat_video_list[Math.floor(Math.random() * cat_video_list.length)].v_lists
      setRandomUrl(url[Math.floor(Math.random() * url.length)])
      setCatVideo(cat_video_list)
  }

  const get_categories = () => {

    return fetch(videoCategories).then(response => response.json()).then(res => {
      return res.items.map((item) => {return {id: item.id, title:item.snippet.title}})
    }).catch(error => console.log(error))  
  }

  const get_videos_by_pageToken = (nextPageToken) => {
    return fetch(`${videos}&maxResults=50&pageToken=${nextPageToken}`)
                    .then(response => response.json())
                    .then(res => res)
                    .catch(error => console.log(error))
  }
  
  return (!isSignedIn && !idToken) ? (
    <Redirect to='/register' />
  ):(
    <>  
    <Navbar handleSignoutClick={handleSignoutClick} user={user}/> 
    <Preview randomUrl={randomUrl} />
    <div className='preview-categories-container'> 
      {
        catVideo.map((cat, index) =>  
        <React.Fragment key={index}>    
            <h3 key={cat.c_id}>{cat.c_title}</h3>
            <div className='entity'>
              <EntityProvider entity={cat.v_lists} setActive={setActive} category={cat.c_title} />
            </div>
            { category===cat.c_title &&               
            <DetailPane category={category} id={id} setActive={setActive} title={title} channelTitle={channelTitle}/>
            }
        </React.Fragment>          
        )
      }
    </div>
    </>
  )
}

export default Categories