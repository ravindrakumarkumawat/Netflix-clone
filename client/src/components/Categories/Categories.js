import React from 'react'
import './Categories.css'
// import { videos, videoCategories } from '../../YoutubeApi'

function Categories({catVideo, onClick}) {  
  return (
    <div className='preview-categories-container'> 
      {
        catVideo.map((cat, index) =>  
        <div className='category' key={index}>  
            {/** h3 should route to category page */}      
            <h3 key={cat.c_id}>{cat.c_title}</h3>
            <div className='entity'>
              <EntityProvider entity={cat.v_lists} onClick={onClick} />
            </div>
        </div>          
        )
      }
    </div>
  )
}

function EntityProvider({ entity, onClick }) {
  return (
    <div className='entity-provider-container small'>
    {
      entity.map((list, index)=>
      <img key={list.id} src={list.thumbnail.url} alt={list.title} title={list.title} onClick={() => onClick(list)} />  
      )
    }
    </div> 
    
  )
} 

export default Categories