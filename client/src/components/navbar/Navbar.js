import React from 'react'
import './Navbar.css'
import Jioflix from '../../assets/images/jioflix.png'

function Navbar (props) {
  return (
    <nav className="navigation">
      <img src={Jioflix} title="logo" alt="logo" className="navbar-logo"/>
      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">Recently Added</a>
      </div>
    </nav>
  )
}

export default Navbar