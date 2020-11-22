import React, { createContext, useReducer } from 'react'
import { reducer } from './videoReducer'
import { videos, videoCategories } from '../../YoutubeApi'

const initialState = {
  catVideos: [],
  randomUrl: ''
}

export const VideoContext = createContext()

export const VideoContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const get_all_categories_videos = async () => {
    const response = await fetch(`${videos}&maxResults=50`)
    const data = await response.json()
    const res =  data
    console.log(res)
    let cat_videos = res.items
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
    // setRandomUrl(url[Math.floor(Math.random() * url.length)])
    // setCatVideo(cat_video_list)
    dispatch({ type: 'GET_ALL_CATEGORIES_VIDEOS', payload: {catVideos: cat_video_list, randomUrl: url[Math.floor(Math.random() * url.length)]}})
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

  return <VideoContext.Provider 
  value={{ 
    catVideo: state.catVideos,
    randomUrl: state.randomUrl,
    get_videos: get_all_categories_videos
  }}>{props.children}</VideoContext.Provider>
}