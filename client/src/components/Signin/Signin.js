import React from 'react'
import './Signin.css'

function Signin (props) {
  return (
    <div className="Container">
    <div className="column">
      <div className="header">        
        <img src={ process.env.PUBLIC_URL + "images/jioflix.png" } title="logo" alt="logo" />
        <h3>Sign In</h3>
      </div>
      <form action="" method="POST">
        <div className="txt_field">          
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">          
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
      </form>
      <div className="signin_link">
        <a href="#" className="signInMessage">New to Netflix? Sign up now.</a>
      </div>
      
    </div>
  </div>
  )
}

export default Signin