import React from 'react'
import './StudioPaneNav.css'

const StudioPaneNav = ({ tab, tabs, setTab }) => {

  return (
    <ul className='StudioPaneNav-ul'>
      {tabs.map(tabName => (
        <li className={`${tabName === tab && 'border-bottom'}`}
          key={tabName} 
          onClick={() => setTab(tabName)}   
        >
          {tabName}
        </li>
      ))}
    </ul>
)}

export default StudioPaneNav