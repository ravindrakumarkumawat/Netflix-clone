import React, { useState, useEffect } from 'react'
import './DetailPane.css'
import DetailPaneNav from '../DetailPaneNav/DetailPaneNav'
import Overview from '../Overview/Overview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const TABS = ['Overview', 'Episodes', 'Details']

function DetailPane ({ category, top, setActive }) {
  const [tab, setTab] = useState()

  useEffect(() => {
    setTab(TABS[0])
  }, [!category])

  const style = {
    top: top + 'px'
  }
  return (
    category && (        
    <div className='detailPane-container' style={style}>
      <div className='pane-wrapper'>
        <FontAwesomeIcon icon={faTimes} className='Icon' onClick={setActive}></FontAwesomeIcon>
        <DetailPaneNav tabs={TABS} tab={tab} setTab={setTab}/>
        <Overview />
      </div>
    </div>
    )
  )
}

export default DetailPane