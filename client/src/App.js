import React from 'react'
import './App.css'
import Preview from './components/Preview/Preview'
import Navbar from './components/navbar/Navbar'
import Categories from './components/Categories/Categories'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Preview />
      <Categories />
    </div>
  );
}

export default App
