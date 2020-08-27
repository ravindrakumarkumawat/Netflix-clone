import React, { useState, useEffect } from 'react'
import './DetailPane.css'
import DetailPaneNav from '../DetailPaneNav/DetailPaneNav'
import Overview from '../Overview/Overview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Playlists from '../Playlists/Playlists'

const TABS = ['Overview', 'Playlists']

function DetailPane ({ category, setActive, id }) {
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
        <h1>{id}</h1>
        <img className={`${tab==='Overview' ? 'max-overview': 'max-playlist'}`} src='https://res.cloudinary.com/diqcnmefm/image/upload/v1598366227/Jioflix/jioflix_mh8n2t.png'
        />
        {(() => {
          switch (tab) {
            case 'Playlists':
              return <Playlists v_id={id} />
            default:
              return <Overview />
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