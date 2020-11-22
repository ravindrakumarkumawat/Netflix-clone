import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import Preview from '../Preview'
import DetailPane from '../DetailPane'
import {Redirect} from 'react-router-dom'
import Navbar from '../Navbar'
import EntityProvider from './EntityProvider'
import { VideoContext } from '../../context/youTubeVideos/videoContextProvider'

const initialRow = {
  category: '',
  id: '',
  title: '',
  channelTitle: ''
}

function Categories({ isSignedIn, handleSignoutClick, user}) { 
  const [activeRow, setActiveRow] = useState(initialRow)
  const {
    category,
    id,
    title,
    channelTitle
  } = activeRow
  const setActive = (activeRow) => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initialRow)
  }

  const {catVideo, get_videos} = useContext(VideoContext)
  
  useEffect(() => { 
    if(isSignedIn) {
      get_videos() 
    } 
  }, [isSignedIn])

  
  return (!isSignedIn) ? (
    <Redirect to='/register' />
  ):(
    <>  
    <Navbar handleSignoutClick={handleSignoutClick} user={user}/> 
    <Preview />
    <div className='preview-categories-container'> 
      {
        catVideo.map((cat, index) =>  
        <React.Fragment key={index}>    
            <h3 key={cat.c_id}>{cat.c_title}</h3>
            <div className='entity'>
              <EntityProvider entity={cat.v_lists} setActive={setActive} category={cat.c_title} />
            </div>
            { category===cat.c_title &&               
            <DetailPane category={category} id={id} setActive={setActive} title={title} channelTitle={channelTitle}/>
            }
        </React.Fragment>          
        )
      }
    </div>
    </>
  )
}

export default Categories