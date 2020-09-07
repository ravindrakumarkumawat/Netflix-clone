import React, {useState} from 'react'
import './Login.css'
import {Link, Redirect} from 'react-router-dom'

function Login (props) {
  const [login, setLogin] = useState(false)

  return login ? (
    <Redirect to='/browse' />
    ) : (
    <div className="Container">
      <div className="column">
        <div className="header"> 
          <h3>Let The Journey Begin !</h3>
        </div>
        <form>
          <div className="txt_field">          
            <input type="email" name='email' required />
            <span></span>
            <label>Email Address</label>
          </div>
          <div className="txt_field">          
            <input type="password" name='password' required />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
        <div className="signin_link">
          <Link to="/register"><span className="signInMessage">New to Netflix? Sign up now.</span></Link>
        </div>
        
      </div>
  </div>
  )
}

export default Login