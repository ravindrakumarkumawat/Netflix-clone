import React, { useState, useEffect } from 'react'
import './Studio.css'
import StudioPaneNav from './StudioPaneNav/StudioPaneNav'
import Overview from '../Overview/Overview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Playlists from '../Playlists/Playlists'
import RelatedVideo from '../RelatedVideo/RelatedVideo'

const TABS = ['Overview', 'Playlists', 'More Like This']

function Studio ({ category, setActive, id, title, channelTitle }) {
  const [tab, setTab] = useState()

  useEffect(() => {
    setTab(TABS[0])
  }, [!category])

  // const style = {
  //   top: top + 'px'
  // }
  return (
    category && (        
    <div className='detailPane-container'><div className='pane-wrapper'>
        {/* tab=== 'Overview' && (
            <iframe title={category} src={`https://www.youtube.com/embed/${id}?vq=hd1080&controls=0&autoplay=1&loop=1&mute=1&cc_load_policy=0&playlist=${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
          )
        */}
        <div className='detailPane-overlay'>
          <h3 style={{
            fontSize: `${tab==='Overview' ? '70px' : '50px'}`
          }}>{channelTitle}</h3>
          {(() => {
            switch (tab) {
              case 'Playlists':
                return <Playlists v_id={id}/>
              case 'More Like This':
                return <RelatedVideo related_vid={id} />
              default:
                return <Overview title={title} id={id} />
            }
          })()}
          <FontAwesomeIcon icon={faTimes} className='Icon' onClick={setActive}></FontAwesomeIcon>
          <StudioPaneNav tabs={TABS} tab={tab} setTab={setTab}/>  
        </div>      
      </div>
    </div>
    )
  )
}

export default Studio