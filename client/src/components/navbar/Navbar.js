import React from 'react'
import './Navbar.css'
import Jioflix from '../../assets/images/jioflix.png'
import { Link } from 'react-router-dom'

function Navbar (props) {
  return (
    <nav className="navigation">
      <Link to="/"><img src={Jioflix} title="logo" alt="logo" className="navbar-logo"/></Link>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/tv-shows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recently-added">Recently Added</Link>
      </div>
    </nav>
  )
}

export default Navbar