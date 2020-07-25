import React, { useState } from 'react'
import './Signup.css'

const API_SIGN_UP = 'http://localhost:5000/signup'

function Signup (props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(API_SIGN_UP, {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, username, email, password }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((res) => {
         console.log({frontend: res})
      })
  }

  return (
    <div className="Container">
        <div className="column">
          <div className="header">
            <h3>Ready to watch? Create an account</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="txt_field">
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required />
              <span></span>
              <label>First name</label>
            </div>

            <div className="txt_field">
              <input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                required />
              <span></span>
              <label>Last name</label>
            </div>

            <div className="txt_field">
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
              <span></span>
              <label>Username</label>
            </div>

            <div className="txt_field">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              required />
              <span></span>
              <label>Email</label>
            </div>

            <div className="txt_field">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              <span></span>
              <label>Password</label>
            </div>

            <input type="submit" value="Sign Up" />
          </form>

          <div className="signup_link">
            <span>Already have an account?<a href="#" className="signInMessage"> Sign in here!</a></span>
          </div>
        </div>

    </div>
  )
}

export default Signup