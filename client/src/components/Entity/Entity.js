import React, { useState } from 'react'
import './Entity.css'

function Entity({ entity }) {
  return (
    <div className='entity-preview-container small'>
    {
      entity.map((list, index)=>
      <img key={list.id} src={list.thumbnail.url} alt={list.title} title={list.title}/>  
      )
    }
    </div> 
    
  )
} 

export default Entity