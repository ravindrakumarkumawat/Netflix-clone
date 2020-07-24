import React from 'react'
import './Signup.css'

function Signup (props) {
  return (
    <div className="Container">
        <div className="column">

          <div className="header">        
            <img src={ process.env.PUBLIC_URL + "images/jioflix.png" } title="logo" alt="logo" />
            <h3>Ready to watch? Create an account</h3>
          </div>

          <form>
            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>First name</label>
            </div>

            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>Last name</label>
            </div>

            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>Username</label>
            </div>

            <div className="txt_field">
              <input type="email" required />
              <span></span>
              <label>Email</label>
            </div>

            <div className="txt_field">
              <input type="email" required />
              <span></span>
              <label>Confirm email</label>
            </div>

            <div className="txt_field">
              <input type="password" required />
              <span></span>
              <label>Password</label>
            </div>

            <div className="txt_field">
              <input type="password" required />
              <span></span>
              <label>Confirm password</label>
            </div>

            <input type="submit" name="submitButton" value="SUBMIT" />
          </form>

          <div className="signup_link">
            <a href="#" className="signInMessage">Already have an account? Sign in here!</a>
          </div>
        </div>

    </div>
  )
}

export default Signup