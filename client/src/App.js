import React, {useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import Watch from './components/Watch/Watch'
import Search from './components/Search/Search'
import Studio from './components/Studio/Studio'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
  Redirect
} from 'react-router-dom'


import {CLIENT_ID, API_KEY} from './OAuth.config'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const [idToken, setIdToken] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const clientId = CLIENT_ID
  const apiKey = API_KEY

  const scopes = 'https://www.googleapis.com/auth/youtube.readonly'
 
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
    //   // const authInstance = window.gapi.auth2.getAuthInstance()
    //   // const user = authInstance.currentUser.get()
    //   // const profile = user.getBasicProfile()
    //   // const email = profile.getEmail()
    //   // const imageUrl = profile.getImageUrl()
    //   //onclick={authInstance.signOut}
    // })
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
            <Navbar handleSignoutClick={handleSignoutClick}/>
            <Categories idToken={idToken} isSignedIn={isSignedIn}/>
          </Route>

          <Route path="/watch/:v_id" exact>                      
            <Watch idToken={idToken} isSignedIn={isSignedIn}/>
          </Route>

          <Route path="/watch" exact>                      
            <h2 className='ErrorMessage'>No id is passed in url</h2>
          </Route>

          <Route path="/search" exact> 
            <Navbar handleSignoutClick={handleSignoutClick}/>                      
            <Search idToken={idToken} isSignedIn={isSignedIn}/>
          </Route>
          
          <Route path="/login" exact>
            <Login />
          </Route>  

          <Route path="/register" exact>
            <Register handleAuthClick={handleAuthClick} idToken={idToken} isSignedIn={isSignedIn}/>
          </Route>

          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App
