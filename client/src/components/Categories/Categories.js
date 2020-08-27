import React, { useState, useCallback } from 'react'
import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
// import { videos, videoCategories } from '../../YoutubeApi'
import { Link } from 'react-router-dom'

function Categories({catVideo , setActive}) {  
  return (
    <div className='preview-categories-container'> 
      {
        catVideo.map((cat, index) =>  
        <React.Fragment key={index}>  
            {/** h3 should route to category page */}      
            <h3 key={cat.c_id}>{cat.c_title}</h3>
            <div className='entity'>
              <EntityProvider entity={cat.v_lists} setActive={setActive} category={cat.c_title} />
            </div>
        </React.Fragment>          
        )
      }
    </div>
  )
}

function EntityProvider({ entity, setActive, category }) {
  const [hovered, setHovered] = useState(false)

  const handleHover = (e, id) => {
    e.type === 'mouseenter'
      ? setHovered(id)
      : setHovered(false)
  }

  const getPos =  (e, id) => {
    const pos = e.target.parentElement.getBoundingClientRect()
    setActive({ category, pos, id })
  }

  return (
    <>
    {
      entity.map((list, index)=>
        <div 
          key={list.id} 
          className='item'
          onMouseEnter={(e)=> handleHover(e, list.id)}
          onMouseLeave={handleHover}>
        { list.id === hovered && (
          <div className='content'> 
            <FontAwesomeIcon icon={faPlay} className='Icon'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInfoCircle} onClick={(e) => getPos(e, list.id)} className='Icon'></FontAwesomeIcon>            
          </div>
        )
        }  
        { list.id === hovered
          ? <iframe title={list.title} src={`https://www.youtube.com/embed/${list.id}?vq=hd1080&controls=0&autoplay=1&loop=1&mute=0&cc_load_policy=0&playlist=${list.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
          : <img src={list.thumbnail.url} alt={list.title} />
        }        
          
        </div>  
      )
    }
    </> 
    
  )
} 

export default Categories