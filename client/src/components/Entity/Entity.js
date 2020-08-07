import React, { useState } from 'react'

function Entity({ entity }) {
  return (
    entity.map(list => <p key={list.id}>{list.id}</p>)
  )
} 

export default Entity