import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import './App.css'
import Feature from './components/Feature'
import Design from './components/Design'
import Customer from './components/Customer'
import About from './components/About'
import Tryit from './components/Tryit'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CompanyLogo/>
      <Feature/>
      <Design/>
      <Customer/>
      <About/>
      <Tryit/>
      <Footer/>
    </div>
  )
}

export default App