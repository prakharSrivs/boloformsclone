import React from 'react'
import Navbar from '../Navbar/Navbar'
import Customers from './Customers'
import Hero from './Hero'
import './home.css'

function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Customers/>
    
    </div>
  )
}

export default Home