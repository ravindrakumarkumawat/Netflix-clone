import React from 'react'
import GoogleLogin from 'react-google-login'

// const API_SIGN_UP = 'http://localhost:5000/register'

function Register (props) {
  const responseGoogle = async (res) => {
    await props.oauthGoogle(res.accessToken);
    if ( props.errorMessage) {
     props.history.push('/browse');
    }
  }
  return (
    <div className="col">
      <div className="text-center">
        <div className="alert alert-primary">
          Or sign up using third-party services
        </div>
        <GoogleLogin 
          clientId="number"
          className="btn btn-outline-danger"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </div>
  )
}

export default Register