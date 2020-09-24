import React, {useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Watch from './components/Watch'
import Search from './components/Search'
import Studio from './components/Studio'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
  Redirect
} from 'react-router-dom'


import {CLIENT_ID, API_KEY} from './OAuth.config'
import Register from './components/Register'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const [idToken, setIdToken] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState({
    name: '',
    imageUrl: '',
    email: ''
  })
  const clientId = CLIENT_ID
  const apiKey = API_KEY

  const scopes = 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube.force-ssl'
 
  useEffect(() => {
    console.log('Loading')

    insertGapiScript();
  }, [isSignedIn])

  const insertGapiScript = () => {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = () => {
      handleClientLoad()
    }
    document.body.appendChild(script)
  }

  const handleClientLoad = () => {
    window.gapi.load('auth2:client', initClient)
  }

  const initClient = () => {
    window.gapi.client.init({
      apiKey,
      clientId,
      scope: scopes
    }).then(() => {
      const authInstance = window.gapi.auth2.getAuthInstance()
      const isSignedIn = authInstance.isSignedIn.get()
      console.log('isSignedIn', isSignedIn)
      setIsSignedIn(isSignedIn)
      setIdToken(authInstance.currentUser.get().getAuthResponse().id_token)
      setAccessToken(authInstance.currentUser.get().getAuthResponse().access_token)
      authInstance.isSignedIn.listen(isSignedIn => {
        setIsSignedIn(isSignedIn)
      })
      const user = authInstance.currentUser.get()
      const profile = user.getBasicProfile()
      const name = profile.getName()
      const email = profile.getEmail()
      const imageUrl = profile.getImageUrl()
      setUser({name, email, imageUrl})
    })
    
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
    
  }

  
  const handleAuthClick = (event) => {
    window.gapi.auth2.getAuthInstance().signIn()
  }

  const handleSignoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut()
  }
  
  return (
    <Router>
      <div className="App">         
        <Switch>
        
          <Route path="/studio" exact>
            <Studio idToken={idToken} isSignedIn={isSignedIn}/>
          </Route>

          <Route path="/browse" exact>
            <Navbar handleSignoutClick={handleSignoutClick} user={user}/>
            <Categories idToken={idToken} accessToken={accessToken} isSignedIn={isSignedIn}/>
          </Route>

          <Route path="/watch/:v_id" exact>                      
            <Watch idToken={idToken} isSignedIn={isSignedIn}/>
          </Route>

          <Route path="/watch" exact>                      
            <h2 className='ErrorMessage'>No id is passed in url</h2>
          </Route>

          <Route path="/search" exact> 
            <Navbar handleSignoutClick={handleSignoutClick} user={user}/>                      
            <Search idToken={idToken} isSignedIn={isSignedIn}/>
          </Route> 

          <Route path="/register" exact>
            <Register handleAuthClick={handleAuthClick} idToken={idToken} isSignedIn={isSignedIn}/>
          </Route>

          <Route path='/' exact>
            <Redirect to='/register' />
          </Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App
