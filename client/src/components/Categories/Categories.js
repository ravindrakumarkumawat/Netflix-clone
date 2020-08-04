import React from 'react'
import './Categories.css'

function Categories({ categories }) {
  return (
    <div className='preview-categories-container'>      
      <h1>Something about categories</h1>
      {
        categories.map(cat => <h2 key={cat.id}>{cat.title}</h2>)
      }
    </div>
  )
}

export default Categories