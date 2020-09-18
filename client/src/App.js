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
  Route, Link
} from 'react-router-dom'


import {CLIENT_ID, API_KEY} from './OAuth.config'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'

const clientId = CLIENT_ID
const apiKey = API_KEY

function App() {
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
  
  return (
    <Router>
      <div className="App">         
        <Switch>
          <Route path="/studio" exact>
            <Studio />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>
         
          <Route path="/register" exact>
            <Register />
          </Route>
          
          <Route path="/browse" exact>          
            <Navbar/>
            <Categories />
          </Route>

          <Route path="/watch/:v_id" exact>                      
            <Watch />
          </Route>

          <Route path="/watch" exact>                      
            <h2 className='ErrorMessage'>No id is passed in url</h2>
          </Route>

          <Route path="/search" exact> 
            <Navbar/>                      
            <Search />
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
