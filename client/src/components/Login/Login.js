import React from 'react'
import { GoogleLogin } from 'react-google-login'
import {CLIENT_ID} from '../../OAuth.config'
import {Link} from 'react-router-dom'



const clientId = CLIENT_ID

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
  }

  return (
    <header>
      <nav className='home-container'>
        <Link to='/' className='logo'>Vivid</Link>     
        <Link to='/Register' className='signup'>Sign up</Link>
      </nav>
      <section className="pitch">      
        <GoogleLogin
        clientId={clientId}
        buttonText="Sign In With Google"
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

export default Login;