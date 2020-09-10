import React from 'react'

import { GoogleLogin } from 'react-google-login'
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken'

const clientId =
  '91971589582-a9ss150kmto7a95s28grunb40dacrn7b.apps.googleusercontent.com'

function Register() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res)
    refreshTokenSetup(res);
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
  }

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Signup With Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
  )
}

export default Register