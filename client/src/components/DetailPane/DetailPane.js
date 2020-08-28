import React, { useState, useEffect } from 'react'
import './DetailPane.css'
import DetailPaneNav from '../DetailPaneNav/DetailPaneNav'
import Overview from '../Overview/Overview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Playlists from '../Playlists/Playlists'

const TABS = ['Overview', 'Playlists']

function DetailPane ({ category, setActive, id, title, channelTitle }) {
  const [tab, setTab] = useState()

  useEffect(() => {
    setTab(TABS[0])
  }, [!category])

  // const style = {
  //   top: top + 'px'
  // }
  return (
    category && (        
    <div className='detailPane-container'>
      <div className='pane-wrapper'>
        <h3 style={{
          'font-size': `${tab==='Overview' ? '70px' : '50px'}`
        }}>{channelTitle}</h3>
        {(() => {
          switch (tab) {
            case 'Playlists':
              return <Playlists v_id={id}/>
            default:
              return <Overview title={title} id={id} />
          }
        })()}
        <FontAwesomeIcon icon={faTimes} className='Icon' onClick={setActive}></FontAwesomeIcon>
        <DetailPaneNav tabs={TABS} tab={tab} setTab={setTab}/>        
      </div>
    </div>
    )
  )
}

export default DetailPane