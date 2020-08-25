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

  const handleHover = useCallback(e => {
    e.type === 'mouseenter'
      ? setHovered(e.target.getAttribute('data-img'))
      : setHovered(false)
  }, [])

  const getPos = useCallback((e, id) => {
    const pos = e.target.parentElement.getBoundingClientRect()
    setActive({ category, pos, id })
  }, [])

  return (
    <>
    {
      entity.map((list, index)=>
        <div 
          key={list.id} 
          data-img={list.id}
          className='item'
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}>
        { list.id === hovered && (
          <div className='content'> 
            <FontAwesomeIcon icon={faPlay} className='Icon'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInfoCircle} onClick={(e) => getPos(e, list.id)} className='Icon'></FontAwesomeIcon>            
          </div>
        )
        }          
          <img src={list.thumbnail.url} alt={list.title} title={list.title} />
        </div>  
      )
    }
    </> 
    
  )
} 

export default Categories