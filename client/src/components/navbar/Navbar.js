import React, {useState, useEffect, forwardRef} from 'react'
import './Navbar.css'
import Wolfster from '../../assets/images/wolfster.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      window.pageYOffset > 75 ? setShow(true) : setShow(false)

    const onScroll = window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav className={`navigation top-bar ${show && 'scrolled'}`}>
      <div className='logo-container'>
        <Link to="/browse">
          {/*<img src={Wolfster} title="logo" alt="logo" className="navbar-logo"/>*/}
          <h1>Vivid</h1>
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
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Link>        
        <Link to="/browse">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </Link>        
      </div>
    </nav>
  )
}
)
export default Navbar