import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
// import Contact_landing from '../components/Contact_page_comp/Contact_landing/Contact_landing'
import NewContact from "../components/Contact_page_comp/Newcontactpage/NewContact"

const Contact = () => {


  return (
    <main>
          <Navbar />
          {/* <Contact_landing/> */}
          <NewContact/>
          <Footer/>
    </main>
  )
}

export default Contact
