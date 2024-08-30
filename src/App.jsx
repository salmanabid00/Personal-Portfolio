import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Mywork from './Components/Mywork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
   <Services></Services>
   <Mywork></Mywork>
   <Contact></Contact>
   <Footer></Footer>

   </>
  )
}

export default App
