import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Contact_landing from '../components/Contact_page_comp/Contact_landing/Contact_landing'
import LocomotiveScroll from 'locomotive-scroll'

const Contact = () => {

  const scroll = new LocomotiveScroll()

  return (
    <main>
          <Navbar />
          <Contact_landing/>
          <Footer/>
    </main>
  )
}

export default Contact
