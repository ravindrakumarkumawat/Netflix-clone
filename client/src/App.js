import React from 'react'
import './App.css'
import Preview from './components/Preview/Preview'
import Navbar from './components/navbar/Navbar'
import Categories from './components/Categories/Categories'

function App() {
  return (
    <div className="App">
      <header>
        <div className='header'>
          <Navbar />
          <Preview />
        </div>
      </header>
      <Categories />
      </div>
  );
}

export default App
