import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Service_Section1 from '../components/Service_page_comp/Service_Section1'
import Service_Section2 from '../components/Service_page_comp/Service_Section2'
import Service_Section3 from '../components/Service_page_comp/Service_Section3'
import Service_Section4 from '../components/Service_page_comp/Service_Section4'

const Services = () => {
   
  const scroll = new LocomotiveScroll()  
    
  return (
    <main data-scroll-container>
      <Navbar/>
      <Service_Section1/>
      <Service_Section2/>
      <Service_Section3/>
      <Service_Section4/>
    </main>
  )
}

export default Services
