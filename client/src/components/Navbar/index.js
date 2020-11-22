import React, { useContext } from 'react'
import './index.css'
import Zephyr from '../../assets/images/zephyr.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'
import {NavDropdown} from 'react-bootstrap'
import {AuthContext} from '../../context/authentication/authContextProvider'


const Navbar = () => {
  const {user, signedOut} = useContext(AuthContext)
  return (
    <nav className='navigation top-bar'>
      <div className='logo-container'>
        <Link to="/browse">
          <img src={Zephyr} title="logo" alt="logo" className="navbar-logo"/>
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
        <NavDropdown title={user.name} id="basic-nav-dropdown" className="nav-dropdown">
          <img className="userImage" src={user.imageUrl}/>
          <NavDropdown.Item>{user.email}</NavDropdown.Item>
          <NavDropdown.Item onClick={() => signedOut()}>Sign Out</NavDropdown.Item>
        </NavDropdown>     
      </div>
    </nav>
  )
}

export default Navbar