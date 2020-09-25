import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import Zephyr from '../../assets/images/zephyr.png'
import './index.css'  

const Register = ({handleAuthClick, isSignedIn}) => {
  return isSignedIn ?
  (<Redirect to='/browse'/>):
  (
    <header>
      <nav className='home-container'>
        <Link to='/' className='logo'>
          <img src={Zephyr} title="logo" alt="logo" className="navbar-logo"/>
        </Link>    
      </nav>
      <section className="pitch">      
        <div id="loginButton" onClick={() => handleAuthClick()}></div>
      </section>
    </header>
  )
}

export default Register