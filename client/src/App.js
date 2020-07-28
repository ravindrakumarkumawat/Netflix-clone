import React, { useState } from 'react'
import './App.css'
import Preview from './components/video/Preview'

const key = '[YOUTUBE_API_KEY]'

const videoCategories = {
  baseURL: `https://www.googleapis.com/youtube/v3/videoCategories?key=${key}`,
  part: 'snippet',
  h1 : 'in',
  regionCode: 'IN'
}

function App() {
  const [preview, setPreview] = useState([])
  const [entities, setEntities] = useState([])


  return (
    <div className="App">
      <Preview />
    </div>
  );
}

export default App
