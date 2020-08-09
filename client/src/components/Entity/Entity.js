import React, { useState } from 'react'
import './Entity.css'
import Preview from '../Preview/Preview'

function Entity({ entity }) {
  return (
    <Preview randomUrl={entity} />
  )
} 

export default Entity