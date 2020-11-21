import React, { useState, useEffect, createContext, useReducer } from 'react'

import { SIGN_IN_USER, SIGN_OUT_USER} from './authTypes'
import { reducer } from './authReducer'
import { CLIENT_ID, API_KEY, SCOPE } from '../../OAuth.config'

const initialState = {
  isSignedIn: false,
  idToken: null,
  accessToken: null,
  user: null
}

export const AuthContext = createContext()

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [idToken, setIdToken] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState({
    name: '',
    imageUrl: '',
    email: ''
  })

  const clientId = CLIENT_ID
  const apiKey = API_KEY

  const scopes = SCOPE
  
  useEffect(() => {
    insertGapiScript()
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
    window.gapi.client.init({ apiKey, clientId, scope: scopes })
      .then(() => {
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
          console.log('User has finished signing in!')
        },
        onfailure: (res) => {
          console.log('Login failed')
        }
      }
      window.gapi.signin2.render('loginButton', params)
    })
    
  }

  
  const signedIn = () => {
    window.gapi.auth2.getAuthInstance().signIn()
    dispatch({
      type: SIGN_IN_USER,
      payload: {
        isSignedIn,
        idToken,
        accessToken,
        user
      }
    })
  }

  const signedOut = () => {
    window.gapi.auth2.getAuthInstance().signOut()
    dispatch({ type: SIGN_OUT_USER })
  }

  return <AuthContext.Provider 
            value={{
              isSignedIn: state.isSignedIn,
              user: state.user,
              idToken: state.idToken,
              accessToken: state.accessToken,
              insertGapiScript,
              signedIn,
              signedOut
            }}>{props.children}</AuthContext.Provider>
}
