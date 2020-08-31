import React, { useState } from 'react'
import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import DetailPane from '../DetailPane/DetailPane'

const initialRow = {
  category: '',
  id: '',
  title: '',
  channelTitle: ''
}

function Categories({ catVideo }) { 
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
  return (
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
  )
}

function EntityProvider({ entity, setActive, category }) {
  const [hovered, setHovered] = useState(false) 

  const handleHover = (e, id) => {
    e.type === 'mouseenter'
      ? setHovered(id)
      : setHovered(false)
  }

  const getActive =  (e, id, title, channelTitle) => {
    setActive({ category, id, title, channelTitle })
  }

  return (
    <div className='entity__inner'>
    {
      entity.map((list, index)=>
        <div 
          key={list.id} 
          className='item'
          onMouseEnter={(e)=> handleHover(e, list.id)}
          onMouseLeave={handleHover}>
        { list.id === hovered && (
          <div className='item__details'>
            <Link to={`/watch/${list.id}`}><FontAwesomeIcon icon={faPlayCircle} className='Icon'></FontAwesomeIcon></Link>
            <FontAwesomeIcon icon={faInfoCircle} onClick={(e) => getActive(e, list.id, list.title, list.channelTitle)} className='Icon'></FontAwesomeIcon>            
          </div>
        )
        } 
        <div className='item__media'> 
          { list.id === hovered
            ? <iframe title={list.title} src={`https://www.youtube.com/embed/${list.id}?vq=hd1080&controls=0&autoplay=1&loop=1&mute=0&cc_load_policy=0&playlist=${list.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
            : <img src={list.thumbnail.url} alt={list.title} className='item__img' />
          }        
        </div> 
        </div>  
      )
    }
    </div> 
    
  )
} 

export default Categories