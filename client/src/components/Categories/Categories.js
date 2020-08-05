import React, { useState, useEffect } from 'react'
import './Categories.css'
import { videos, videoCategories } from '../../YoutubeApi'

function Categories(props) {  
  const [categories, setCategories] = useState([])
  const [video, setVideo] = useState([])
  // const [selectCat, setSelectCat] = useState({})
  const [nextPageToken, setNextPageToken] = useState('')

  useEffect(() => {
    get_categories()
    get_videos()
    filter_videos()
  }, [])

  const get_categories = async () => {
    await fetch(videoCategories).then(response => response.json()).then(res => {      
      console.log('videoCategories API...')
      const catItems = res.items.map((item) => {return {id: item.id, title:item.snippet.title, v_id: []}})
      setCategories(catItems)
    }).catch(error => console.log(error))
  }

  const get_videos = async () => {
    let count = 0
    while (count < 10) {
      if(count === 0) {
        await fetch(`${videos}&maxResults=50&`).then(response => response.json()).then(res => {          
          console.log(res) 
          setVideo(res.items)
          setNextPageToken(res.nextPageToken)
        }).catch(error => console.log(error))
        count++
      } else {
        await fetch(`${videos}&maxResults=50&pageToken=${nextPageToken}`).then(response => response.json()).then(res => { 
          console.log('Isme enter to hua'+ res.nextPageToken)
          console.log(res.nextPageToken)
          setNextPageToken(res.nextPageToken)
        }).catch(error => console.log(error))
        count++
      }
    }
    console.log(video)
  }
  
  const filter_videos = () => {
    

    // const vi = {}
    // for(let item of res.items) {
    // if(vi.hasOwnProperty(item.snippet.categoryId)) {
    //   vi[item.snippet.categoryId].push(item.id)
    // }
    // else {
    //   vi[item.snippet.categoryId] = []
    // }
    // }
    // setSelectCat(vi)
  }

  return (
    <div className='preview-categories-container'>      
      <h1>Something about categories.......</h1>
      {
        categories.map((cat) => <p key={cat.id}> {cat.id} {cat.title} </p>)
      }
    </div>
  )
}

export default Categories