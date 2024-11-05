import React from 'react'
import Header from './components/Header'
import Popural from './Section/Popural'
import Hero from './Section/Hero' 
import About from './Section/About'
import Popural from './Section/Popural'
import Properties from './Section/Properties'
import Service from './Section/Service'
import Clients from './Section/Clients'
import Contact from './Section/Contact'
import Footer from './components/Footer'
import { DarkModeProvider } from './components/DarkModeContext'
const App = () => {
  return (
    <>
    <DarkModeProvider>
      <Header/>
      <Hero/>
      <About/>
      <Popural/>
      <Properties/>
      <Service/>
      <Clients/>
      <Contact/>
      <Footer/>
    </DarkModeProvider>
    </>
  )
}

export default App