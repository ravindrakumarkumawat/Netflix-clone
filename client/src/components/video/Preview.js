import React from 'react'

function Preview (props) {
  const { categories } = props
  return (    
    <div>
       <ul>{categories.map(item => <li key={item.id}>{item.snippet.title}</li>) }</ul>
    </div>
  )
}

export default Preview