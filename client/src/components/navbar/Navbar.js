import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Jioflix from '../../assets/images/jioflix.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar (props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <nav className={`navigation top-bar ${show && 'scrolled'}`}>
      <div className='logo-container'>
        <Link to="/">
          <img src={Jioflix} title="logo" alt="logo" className="navbar-logo"/>
        </Link>
      </div>
      <ul className="navbar-right nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tv-shows">TV Shows</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/recently-added">Recently Added</Link></li>
      </ul>
      <div className='right-items'>
        <Link to="/Search">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar