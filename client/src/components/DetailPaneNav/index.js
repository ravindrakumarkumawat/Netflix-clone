import React from 'react'
import './index.css'

const DetailPaneNav = ({ tab, tabs, setTab }) => {

  return (
    <ul className='DetailPaneNav-ul'>
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

export default DetailPaneNav