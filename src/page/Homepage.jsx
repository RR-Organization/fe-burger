import React from 'react'
import NavBar from '../components/Navbar'
import HeroBody from '../components/Hero'
import AboutBody from '../components/AboutUs'
import MenuBody from '../components/Menu'
import FooterBody from '../components/Footer'

function Homepage() {
  return (
    <div>
     <NavBar></NavBar>
     <HeroBody></HeroBody>
     <AboutBody></AboutBody>
     <MenuBody></MenuBody>
     <FooterBody></FooterBody>
    </div>
  )
}

export default Homepage