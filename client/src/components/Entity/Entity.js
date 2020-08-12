import React, { useState } from 'react'
import './Entity.css'
import Preview from '../Preview/Preview'
import { useParams } from 'react-router-dom'

function Entity() {
  const {v_id} = useParams();
  return (
    <Preview randomUrl={v_id} />
  )
} 

export default Entity