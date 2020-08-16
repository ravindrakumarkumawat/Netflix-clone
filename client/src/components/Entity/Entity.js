import React, { useState, useEffect } from 'react'
import './Entity.css'
import Preview from '../Preview/Preview'
import { useParams } from 'react-router-dom'
import {video, relatedVideo} from '../../YoutubeApi'
import Playlists from '../Playlists/Playlists'
import { Link } from 'react-router-dom'

function Entity() {
  const {v_id} = useParams()
  const [randomUrl, setRandomUrl] = useState('')
  useEffect(() => {
    fetch(`${video}${v_id}`).then((response)=> response.json()).then(res => {
      setRandomUrl({id: res.items[0].id, title: res.items[0].snippet.title, thumbnails: res.items[0].snippet.thumbnails.high, channelId: res.items[0].snippet.channelId})
    })
  }, [])

  return (
    <>
      <Preview randomUrl={randomUrl} />
      <Playlists v_id={v_id} />
      <RelatedVideo related_vid={v_id} />
    </>
  )
} 

function RelatedVideo({ related_vid }) {
  const [related, setRelated] = useState([])
  useEffect(() => {
    fetch(`${relatedVideo}${related_vid}`).then((responese) => responese.json()).then((res) => {
      const videolist = res.items.map(item =>  {return {id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.high.url, channelId: item.snippet.channelId}})
      setRelated(videolist)
    })
  }, [])
  return (
    <div className='preview-categories-container noScroll'>
      <div className='category'>
        <h3>You might also like</h3>
        <div className='entity'>
          <div className='entity-provider-container small'>
            {
              related.map((list) => 
                <Link to={`/details/${list.id}`} key={list.id}>
                  <img src={list.thumbnail} alt={list.title} title={list.title} />
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entity