import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Categories from './components/Categories/Categories'
import Watch from './components/Watch/Watch'
import Search from './components/Search/Search'
import Studio from './components/Studio/Studio'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from 'react-router-dom'

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'

function App() {
  
  return (
    <Router>
      <div className="App">         
        <Switch>
          <Route path="/studio" exact>
            <Studio />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>
         
          <Route path="/register" exact>
            <Register />
          </Route>
          
          <Route path="/browse" exact>          
            <Navbar/>
            <Categories />
          </Route>
          {/*<Route path="/tv-shows" exact>  
            <h2 className='ErrorMessage'>This is tv-shows</h2> 
          </Route>
          <Route path="/movies" exact>
            <h2 className='ErrorMessage'>This is movies page</h2>
          </Route>
          <Route path="/recently-added" exact>
            <h2 className='ErrorMessage'>This is recently page</h2>
          </Route>
          <Route path="/details/:v_id" exact>                      
            <Entity />
          </Route>
          <Route path="/details" exact>                      
            <h2 className='ErrorMessage'>No id is passed in url</h2>
          </Route>*/}
          <Route path="/watch/:v_id" exact>                      
            <Watch />
          </Route>
          <Route path="/watch" exact>                      
            <h2 className='ErrorMessage'>No id is passed in url</h2>
          </Route>
          <Route path="/search" exact> 
            <Navbar/>                      
            <Search />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App
