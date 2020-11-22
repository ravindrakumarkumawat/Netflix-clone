import React, { useContext } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Zephyr from '../../assets/images/zephyr.png'
import './index.css'
import {AuthContext} from '../../context/authentication/authContextProvider'

const Register = () => {
  const {isSignedIn, signedIn } = useContext(AuthContext)

  return isSignedIn ?
  (<Redirect to='/browse'/>):
  (
    <header>
      <nav className='home-container'>
        <Link to='/' className='logo'>
          <img src={Zephyr} title="logo" alt="logo" className="navbar-logo1"/>
        </Link>    
      </nav>
      <section className="pitch">    
        <div className="pitch-content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <h5>Ready to watch? Sign in or Sign Up to your Gmail Account. </h5> 
        </div>
        <div id="loginButton" onClick={() => signedIn()}></div>
      </section>
    </header>
  )
}

export default Register