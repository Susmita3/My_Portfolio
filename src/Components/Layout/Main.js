import React from 'react'
import Footer from '../Pages/Footer/Footer'
import Nav from '../Pages/Navbar/Nav'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Testimonials from '../Pages/Testimonials/Testimonials'
import Service from '../Pages/Services/Services'
import Experience from '../Pages/Experience/Experience'
import Header from '../Pages/Header/Header'

const Main = () => {
  return (
    <div>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Experience></Experience>
        <Service></Service>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Main