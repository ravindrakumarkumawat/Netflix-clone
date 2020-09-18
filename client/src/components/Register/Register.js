import React, {useState, useEffect} from 'react'
import {CLIENT_ID, API_KEY} from '../../OAuth.config'
import {Link, Redirect} from 'react-router-dom'

const clientId = CLIENT_ID
const apiKey = API_KEY
  

function Register() {
  const [isSignedIn, setIsSignedIn] = useState(null)
 
  useEffect(() => {
    console.log('Loading')

    insertGapiScript();
  }, [])

  const insertGapiScript = () => {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => {
      initializeGoogleSignIn()
    }
    document.body.appendChild(script)
  }

  const initializeGoogleSignIn = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: clientId
      }).then(()=> {
        const authInstance = window.gapi.auth2.getAuthInstance()
        const isSignedIn = authInstance.isSignedIn.get()
        setIsSignedIn(isSignedIn)

        authInstance.isSignedIn.listen(isSignedIn => {
          setIsSignedIn(isSignedIn)
        })
      })
      console.log('Api inited')

      window.gapi.load('signin2', () => {
        const params = {
          scope: 'profile email',
          width: 240,
          height: 50,
          longtitle: true,
          theme: 'dark',
          onsuccess: (res) => {
            console.log('User has finished signing in!', res)
          },
          onfailure: (res) => {
            console.log('Login failed: res:', res)
          }
        }
        window.gapi.signin2.render('loginButton', params)
      })

      // const authInstance = window.gapi.auth2.getAuthInstance()
      // const user = authInstance.currentUser.get()
      // const profile = user.getBasicProfile()
      // const email = profile.getEmail()
      // const imageUrl = profile.getImageUrl()
      //onclick={authInstance.signOut}
    })
  }

  

  // const onSuccess = (res) => {
  //   console.log('Login Success: currentUser:', res)   
  // }

  // const onFailure = (res) => {
  //   console.log('Login failed: res:', res)
  // }

  return isSignedIn ? (
    <Redirect to='/browse' />
  ):(
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
        <div id="loginButton"></div>
      </section>
    </header>
  )
}

export default Register