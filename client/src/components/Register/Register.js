import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import './Register.css'  

function Register({handleAuthClick, isSignedIn, idToken}) {

  return (isSignedIn && idToken) ?(<Redirect to='/browse'/>):
  (
    <header>
      <nav className='home-container'>
        <Link to='/' className='logo'>Vivid</Link>     
      </nav>
      <section className="pitch">      
        <div id="loginButton" onClick={() => handleAuthClick()}></div>
      </section>
    </header>
  )
}

export default Register