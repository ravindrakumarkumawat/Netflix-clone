import React, { useState, useEffect } from 'react'
import './Categories.css'
import { videoCategories } from '../../YoutubeApi'

function Categories(props) {  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    get_categories()
  }, [])

  const get_categories = async () => {
    await fetch(videoCategories).then(response => response.json()).then(res => {      
      console.log('videoCategories API...')
      const catItems = res.items.map((item) => {return {id: item.id, title:item.snippet.title}})
      setCategories(catItems)
    }).catch(error => console.log(error))
  }

  return (
    <div className='preview-categories-container'>      
      <h1>Something about categories.......</h1>
      {
        categories.map(cat => <h2 key={cat.id}>{cat.title}</h2>)
      }
    </div>
  )
}

export default Categories