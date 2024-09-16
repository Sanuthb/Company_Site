import React from 'react'
import './Additional_card.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Enquiry_card = () => {
  return (
    <div className='Enquiry_card'>
       <Link to="/contact">Begin Your Journey <FaArrowRight/></Link>
    </div>
  )
}

export default Enquiry_card
