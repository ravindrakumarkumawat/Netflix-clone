import React, { useState, useEffect } from 'react'
import './Categories.css'
import { videos, videoCategories } from '../../YoutubeApi'
import Entity from '../Entity/Entity'

function Categories(props) {  
  const [catVideo, setCatVideo] = useState([])

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
      setCatVideo(cat_video_list)
  }

  const get_categories = async () => {

    return await fetch(videoCategories).then(response => response.json()).then(res => {      
      console.log('videoCategories API...')
      return res.items.map((item) => {return {id: item.id, title:item.snippet.title}})
    }).catch(error => console.log(error))  
  }

  const get_videos_by_pageToken = async (nextPageToken) => {
    return  await fetch(`${videos}&maxResults=50&pageToken=${nextPageToken}`)
                    .then(response => response.json())
                    .then(res => res)
                    .catch(error => console.log(error))
  }

  return (
    <div className='preview-categories-container'> 
      {
        catVideo.map((cat, index) =>  
        <div className='category' key={index}>  
            {/** h3 should route to category page */}      
            <h3 key={cat.c_id}>{cat.c_title}</h3>
            <div className='entity'>
              <Entity entity={cat.v_lists} />
            </div>
        </div>          
        )
      }
    </div>
  )
}

export default Categories