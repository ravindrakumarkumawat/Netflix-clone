import React, { useState, useEffect } from 'react'
import './App.css'
import Preview from './components/video/Preview'

const videoCategories = 'https://www.googleapis.com/youtube/v3/videoCategories?key=AIzaSyATFWDHJZBoY2oKFZf_9zw8N0yCGQF6Z2I&part=snippet&h1=in&regionCode=IN'
                           


function App() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    all_categories()
  }, [])

  const all_categories = async () => {
    await fetch(videoCategories).then(response => response.json()).then(res => {
      setCategories(res.items)
    })
  }

  return (
    <div className="App">
      <Preview categories={categories} />
    </div>
  );
}

export default App
