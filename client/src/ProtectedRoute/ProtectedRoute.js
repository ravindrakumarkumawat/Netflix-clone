import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/authentication/authContextProvider'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {isSignedIn} = useContext(AuthContext)
  return (
    <Route
      render={props =>
        isSignedIn ? <Component {...props} /> : <Redirect to="/" />
      }
      {...rest}
    exact />
  )
}

export default ProtectedRoute
