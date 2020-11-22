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

const Categories = lazy(() => import('./components/Categories'))
const Watch = lazy(() => import('./components/Watch'))
const Search = lazy(() => import('./components/Search'))
const Register = lazy(() => import('./components/Register'))


function App() { 
  
  return (
    <VideoContextProvider>
    <AuthContextProvider>
    <Router>
      <div className="App"> 
      <Suspense fallback={<div className='ErrorMessage'>Loading...</div>}>       
        <Switch>

          <Route path="/browse" exact>            
              <Categories />
          </Route>

          <Route path="/watch/:v_id" exact>                      
            <Watch />
          </Route>

          <Route path="/watch" exact>                      
            <h2 className='ErrorMessage'>No id is passed in url</h2>
          </Route>

          <Route path="/search" exact>                       
            <Search />
          </Route> 

          <Route path="/register" exact>
            <Register />
          </Route>

          <Route path='/' exact>
            <Redirect to='/register' />
          </Route>
        </Switch> 
        </Suspense>     
      </div>
    </Router>
    </AuthContextProvider>
    </VideoContextProvider>
  );
}

export default App
