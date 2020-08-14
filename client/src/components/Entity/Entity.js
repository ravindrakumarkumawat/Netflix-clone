import React, { useState, useEffect } from 'react'
import './Entity.css'
import Preview from '../Preview/Preview'
import { useParams } from 'react-router-dom'
import {video} from '../../YoutubeApi'

function Entity() {
  const {v_id} = useParams()
  const [randomUrl, setRandomUrl] = useState('')
  useEffect(() => {
    fetch(`${video}${v_id}`).then((response)=> response.json()).then(res => {
      setRandomUrl({id: res.items[0].id, title: res.items[0].snippet.title, thumbnails: res.items[0].snippet.thumbnails.high, channelId: res.items[0].snippet.channelId})
    })
  }, [])
  return (
    <Preview randomUrl={randomUrl} />
  )
} 

export default Entity