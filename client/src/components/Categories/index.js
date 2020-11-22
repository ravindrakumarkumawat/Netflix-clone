import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import Preview from '../Preview'
import DetailPane from '../DetailPane'
import {Redirect} from 'react-router-dom'
import Navbar from '../Navbar'
import EntityProvider from './EntityProvider'
import { VideoContext } from '../../context/youTubeVideos/videoContextProvider'
import {AuthContext} from '../../context/authentication/authContextProvider'

function Categories() { 
  const {catVideo, get_videos, activePanel} = useContext(VideoContext)
  const { isSignedIn } = useContext(AuthContext)
  const {category} = activePanel
  useEffect(() => { 
    if(isSignedIn) {
      get_videos() 
    } 
  }, [isSignedIn])

  
  return (!isSignedIn) ? (
    <Redirect to='/register' />
  ):(
    <>  
    <Navbar /> 
    <Preview />
    <div className='preview-categories-container'> 
      {
        catVideo.map((cat, index) =>  
        <React.Fragment key={index}>    
            <h3 key={cat.c_id}>{cat.c_title}</h3>
            <div className='entity'>
              <EntityProvider entity={cat.v_lists} category={cat.c_title} />
            </div>
            { category===cat.c_title &&               
            <DetailPane />
            }
        </React.Fragment>          
        )
      }
    </div>
    </>
  )
}

export default Categories