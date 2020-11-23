import React, { Suspense, lazy } from 'react'
import './App.css'
// import { Categories, Watch, Search, Register} from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { VideoContextProvider } from './context/youTubeVideos/videoContextProvider'
import { AuthContextProvider } from './context/authentication/authContextProvider'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

const Categories = lazy(() => import('./components/Categories'))
const Watch = lazy(() => import('./components/Watch'))
const Search = lazy(() => import('./components/Search'))
const Register = lazy(() => import('./components/Register'))
const PageNotFound  = lazy(() => import('./components/PageNotFound'))

function App() {
  return (
    <div className='App'>
      <Router>
        <VideoContextProvider>
          <AuthContextProvider>
            <Suspense fallback={<div className='ErrorMessage'>Loading...</div>}>
              <Switch>
                <ProtectedRoute path='/browse' component={Categories} />
                <ProtectedRoute path='/watch/:v_id' component={Watch} />
                <ProtectedRoute path='/search' component={Search} />
                <Route path='/' component={Register} exact />
                <Route component={PageNotFound} />
              </Switch>
            </Suspense>
          </AuthContextProvider>
        </VideoContextProvider>
      </Router>
    </div>
  )
}

export default App
