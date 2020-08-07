import React, { useState, useEffect } from 'react'
import './Categories.css'
import { videos, videoCategories } from '../../YoutubeApi'

function Categories(props) {  
  const [categories, setCategories] = useState([])
  // const [catVideo, setCatVideo] = useState({})
  // const [nextPageToken, setNextPageToken] = useState('')

  useEffect(() => {
    get_categories()
    // get_videos_by_pageToken()     
    // get_videos()  
  }, [])


  const get_categories = async () => {

    const cat_name = await fetch(videoCategories).then(response => response.json()).then(res => {      
      console.log('videoCategories API...')
      return res.items.map((item) => {return {id: item.id, title:item.snippet.title}})
      // setCategories(catItems)
    }).catch(error => console.log(error))

    const cat_video = await fetch(`${videos}&maxResults=50`)
                    .then(response => response.json())
                    .then(res => {
                      // setVideo(res.items)
                      // setNextPageToken(res.nextPageToken)
                      const vi = {}
                      for(let item of res.items) {
                        if(vi.hasOwnProperty(item.snippet.categoryId)) {
                          vi[item.snippet.categoryId].push(item.id)
                        }
                        else {
                           vi[item.snippet.categoryId] = []
                        }
                      }
                      return vi
                    })
                    .catch(error => console.log(error))

    const cat_video_list = []
    for(let cat of cat_name) {
      if(cat_video.hasOwnProperty(cat.id)) {
        cat_video_list.push({
          v_lists: cat_video[cat.id],
          c_id: cat.id,
          c_title: cat.title
        })
      }
    }
    setCategories(cat_video_list)
    
  }

  // const get_videos_by_pageToken = async () => {
    
  //   let count = 0
  //   while (count < 10) {
  //     if (nextPageToken) {
  //       await fetch(`${videos}&maxResults=50&pageToken=${nextPageToken}`)
  //                   .then(response => response.json())
  //                   .then(res => {
  //                     console.log(res.nextPageToken)
  //                   })
  //                   .catch(error => console.log(error))
  //       count++
  //     }
  //   }
  // }

  const get_videos = async () => {
    // await fetch(`${videos}&maxResults=50`)
    //                 .then(response => response.json())
    //                 .then(res => {
    //                   // setVideo(res.items)
    //                   // setNextPageToken(res.nextPageToken)
    //                   const vi = {}
    //                   for(let item of res.items) {
    //                     if(vi.hasOwnProperty(item.snippet.categoryId)) {
    //                       vi[item.snippet.categoryId].push(item.id)
    //                     }
    //                     else {
    //                        vi[item.snippet.categoryId] = []
    //                     }
    //                   }
    //                   setCatVideo(vi)  
    //                 })
    //                 .catch(error => console.log(error))

    // let count = 0
    // while (count < 10) {
    //   if(count === 0) {
    //     const res = await get_videos_by_pageToken(nextPageToken)
    //     setVideo(res.items)        
    //     count++
    //   } else {
    //     const res = await get_videos_by_pageToken(nextPageToken)
    //     setVideo([...video, res.items])
    //     count++
    //   }
    // }
  }
  
  const filter_videos = (vi) => { 
    
  }

  return (
    <div className='preview-categories-container'> 
      {
        categories.map((cat) => 
          <div>
            <h2 key={cat.c_id}>{cat.c_title}</h2>
            <ul>
              {
                cat.v_lists.map((list) => 
                <li key={cat.c_id}>{list}</li>)
              }
            </ul>
          </div>
          
        )
      }
    </div>
  )
}

export default Categories