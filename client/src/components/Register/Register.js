import React from 'react'
import {CLIENT_ID} from '../../OAuth.config'
import {Link} from 'react-router-dom'

import { GoogleLogin } from 'react-google-login'

const clientId = CLIENT_ID
  

function Register() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res)   
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
  }

  return (
    <header>
      <nav className='home-container'>
        <Link to='/' className='logo'>Vivid</Link>     
        <Link to='/login' className='signin'>Sign in</Link>
      </nav>
      <section className="pitch">      
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign Up With Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </section>
    </header>
  )
}

export default Register