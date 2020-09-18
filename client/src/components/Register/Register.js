import React from 'react'
import {Link, Redirect} from 'react-router-dom'  

function Register({handleAuthClick}) {

  return (
    <header>
     {/* <nav className='home-container'>
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
  </section>*/ }
      <nav className='home-container'>
        <Link to='/' className='logo'>Vivid</Link>     
        <Link to='/login' className='signin'>Sign in</Link>
      </nav>
      <section className="pitch">      
        <div id="loginButton" onClick={() => handleAuthClick()}></div>
      </section>
    </header>
  )
}

export default Register