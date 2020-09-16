import React, {useEffect} from 'react'
import {CLIENT_ID, API_KEY} from '../../OAuth.config'
import {Link} from 'react-router-dom'

import { GoogleLogin } from 'react-google-login'

const clientId = CLIENT_ID
const apiKey = API_KEY
  

function Register() {

 
  const insertGapiScript = () => {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = () => {
      handleClientLoad()
    }
    document.body.appendChild(script)
  }

  const handleClientLoad =() => {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    window.gapi.load('client:auth2', initClient);
  }

  var GoogleAuth; // Google Auth object.
  var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly'; // Scope
  const initClient = () => {
    // Step: 1 Configure the client object
    // Retrieve the discovery document for version 3 of Google Drive API.
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    window.gapi.client.init({
        'apiKey': apiKey,
        'clientId': clientId,
        'scope': SCOPE,
        'discoveryDocs': [discoveryUrl]
    }).then(function () {
        GoogleAuth = window.gapi.auth2.getAuthInstance()

        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus)

        // Handle initial sign-in state. (Determine if user is already signed in.)
        // var user = GoogleAuth.currentUser.get();
        // setSigninStatus();
    });
  }

  const handleAuthClick=(res)=> {
    if (GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked "Sign out" button.
      GoogleAuth.signOut()
    } else {
      // User is not signed in. Start Google auth flow.
      GoogleAuth.signIn()
    }
  }

  const revokeAccess=()=> {
    GoogleAuth.disconnect();
  }


  var isAuthorized;
  var currentApiRequest;

  /**
   * Store the request details. Then check to determine whether the user
   * has authorized the application.
   *   - If the user has granted access, make the API request.
   *   - If the user has not granted access, initiate the sign-in flow.
   */
  const sendAuthorizedApiRequest=(requestDetails)=> {
    currentApiRequest = requestDetails;
    if (isAuthorized) {
      // Make API request
      // gapi.client.request(requestDetails)

      // Example 2: Use gapi.client.request(args) function
      // var request = gapi.client.request({
      //   'method': 'GET',
      //   'path': '/drive/v3/about',
      //   'params': {'fields': 'user'}
      // });
      // // Execute the API request.
      // request.execute(function(response) {
      //   console.log(response);
      // });

      // Reset currentApiRequest variable.
      currentApiRequest = {};
    } else {
      GoogleAuth.signIn();
    }
  }

  /**
   * Listener called when user completes auth flow. If the currentApiRequest
   * variable is set, then the user was prompted to authorize the application
   * before the request executed. In that case, proceed with that API request.
   */
  const updateSigninStatus=(isSignedIn) =>{
    if (isSignedIn) {
      isAuthorized = true;
      if (currentApiRequest) {
        sendAuthorizedApiRequest(currentApiRequest);
      }
    } else {
      isAuthorized = false; 
    }
  }

  useEffect(() => {
    console.log('Loading')

    insertGapiScript();
  }, [])

  // const initializeGoogleSignIn = () => {
  //   window.gapi.load('auth2', () => {
  //     window.gapi.auth2.init({
  //       client_id: clientId
  //     })
  //     console.log('Api inited')

  //     window.gapi.load('signin2', () => {
  //       const params = {
  //         onsuccess: (res) => {
  //           console.log('User has finished signing in!', res)
  //         },
  //         onfailure: (res) => {
  //           console.log('Login failed: res:', res)
  //         }
  //       }
  //       window.gapi.signin2.render('loginButton', params)
  //     })
  //   })
  // }

  // const onSuccess = (res) => {
  //   console.log('Login Success: currentUser:', res)   
  // }

  // const onFailure = (res) => {
  //   console.log('Login failed: res:', res)
  // }

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
      <div id="loginButton">Sign in with Google</div>
      <button id="sign-in-or-out-button"
        onClick={() => handleAuthClick()}>Sign In/Authorize</button>

        <button id="revoke-access-button"
        onClick={() => revokeAccess()}>Revoke access</button>
    </header>
  )
}

export default Register