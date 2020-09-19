import React from 'react'
import './Navbar.css'
import Wolfster from '../../assets/images/wolfster.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({handleSignoutClick}) => {
  return (
    <nav className='navigation top-bar'>
      <div className='logo-container'>
        <Link to="/browse">Vivid
          {/*<h1>Vivid</h1>*/}
        </Link>
      </div>
     {/* <ul className="navbar-right nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tv-shows">TV Shows</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/recently-added">Recently Added</Link></li>
      </ul>
  */}
      <div className='right-items'>
        <Link to='/studio'>
          <FontAwesomeIcon icon={faUpload} title='Upload video'></FontAwesomeIcon>
        </Link>
        <Link to='/search'>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Link>        
        <Link to='/register'>
          <FontAwesomeIcon icon={faUser} title='Sign Out' onClick={() => handleSignoutClick()}></FontAwesomeIcon>
        </Link>       
      </div>
    </nav>
  )
}

export default Navbar