import React, { useState } from 'react'
import './Register.css'
import { Link, Redirect } from 'react-router-dom'

const API_SIGN_UP = 'http://localhost:5000/register'

function Register (props) {
  const [user, setUser] = useState({
    firstName: '', 
    lastName: '',
    username: '',
    email: '',
    password: ''
  })
  
  const [error, setError] = useState({
    firstName: '', 
    lastName: '',
    username: '',
    email: '',
    password: ''
  })

  const [login, setLogin] = useState(false)

  const updateUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(API_SIGN_UP, {
      method: 'POST',
      body: JSON.stringify({ 
        firstName: user.firstName, 
        lastName: user.lastName, 
        username: user.username, 
        email: user.email,
        password: user.password }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => {
         setUser({
          firstName: '', 
          lastName: '',
          username: '',
          email: '',
          password: ''
        })
        setLogin(true)
      })
  }

  return login ? (
    <Redirect to='/browse' />
  ) : (
    <div className="Container">
        <div className="column">
          <div className="header">
            <h3>Ready to watch? Create an account</h3>
          </div>

          <div className="error">
            <ul>
              <li>{error.firstName}</li>
              <li>{error.lastName}</li>
              <li>{error.username}</li>
              <li>{error.email}</li>
              <li>{error.password}</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="txt_field">
              <input 
                type="text"
                name='firstName' 
                value={user.firstName}
                onChange={updateUser}
                required />
              <span></span>
              <label>First name</label>
            </div>

            <div className="txt_field">
              <input 
                type="text" 
                name='lastName'
                value={user.lastName} 
                onChange={updateUser}
                required />
              <span></span>
              <label>Last name</label>
            </div>

            <div className="txt_field">
              <input 
                type="text"
                name='username' 
                value={user.username}
                onChange={updateUser}
                required />
              <span></span>
              <label>Username</label>
            </div>

            <div className="txt_field">
              <input 
                type="email"
                name='email' 
                value={user.email}
                onChange={updateUser}
              required />
              <span></span>
              <label>Email</label>
            </div>

            <div className="txt_field">
              <input 
                type="password" 
                name='password'
                value={user.password}
                onChange={updateUser}
                required />
              <span></span>
              <label>Password</label>
            </div>

            <input type="submit" value="Sign Up" />
          </form>

          <div className="signup_link">
            <span>Already have an account?<Link to="/login" className="signInMessage"> Sign in here!</Link></span>
          </div>
        </div>

    </div>
  )
}

export default Register