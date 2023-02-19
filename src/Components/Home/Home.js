import React from 'react'
import Navbar from '../Navbar/Navbar'
import Customers from './Customers'
import Hero from './Hero'
import './home.css'
import HowToUse from './HowToUse'

function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Customers/>
    <HowToUse/>
    </div>
  )
}

export default Home