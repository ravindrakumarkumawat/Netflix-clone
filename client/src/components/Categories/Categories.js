import React from 'react'
import './Categories.css'
// import { videos, videoCategories } from '../../YoutubeApi'
import { Link } from 'react-router-dom'

function Categories({catVideo}) {  
  return (
    <div className='preview-categories-container'> 
      {
        catVideo.map((cat, index) =>  
        <>  
            {/** h3 should route to category page */}      
            <h3 key={cat.c_id}>{cat.c_title}</h3>
            <div className='entity'>
              <EntityProvider entity={cat.v_lists} />
            </div>
        </>          
        )
      }
    </div>
  )
}

function EntityProvider({ entity }) {
  return (
    <>
    {
      entity.map((list, index)=>
        <Link to={`/details/${list.id}`} key={list.id} className='item'>
          <img src={list.thumbnail.url} alt={list.title} title={list.title} />
        </Link>  
      )
    }
    </> 
    
  )
} 

export default Categories