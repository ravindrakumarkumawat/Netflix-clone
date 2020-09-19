import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <header>
    <nav className='home-container'>
      <Link to='/' className='logo'>Vivid</Link>   
      <Link to='/register' className='signup'>Sign up</Link>
    </nav>
    <section className="pitch">
      <h1 className="pitch__title">Unlimited movies, TV shows and more.</h1>
      <h2 className="pitch__subtitle">Watch anywhere. Cancel anytime.</h2>
    </section>
    </header>
  )
}

export default Home