import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import {Link, Redirect } from 'react-router-dom'
import Zephyr from '../../assets/images/zephyr.png'
import './index.css'
import { auth, provider } from '../../firebase'
import { AuthContext } from '../../context/authentication/authContextProvider'

const Register = (props) => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error)=> alert(error.message))
  }
  const { isSignedIn } = useContext(AuthContext)

  const { from } = props.location.state || {from: {pathname: '/'}}
 
  
  if(isSignedIn && from.pathname === '/') {
    return <Redirect to='/browse' />
  }

  return isSignedIn ? <Redirect to={from} /> :(
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
        <Button onClick={signIn}>Sign In</Button>
      </section>
    </header>
  )
}

export default Register