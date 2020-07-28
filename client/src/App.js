import React, { useState } from 'react'
import './App.css'
import Preview from './components/video/Preview'

const baseURL = 'https://www.googleapis.com/youtube/v3/'
const key = '[YOUTUBE_API_KEY]'
const part= 'snippet' 
const chart='mostPopular' 
const maxResults= 15

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
