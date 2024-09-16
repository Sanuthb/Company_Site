import React from 'react'
import './Additional_card.css'
import { Link } from 'react-router-dom'
import work from '../../assets/work.png'
import { MdArrowOutward } from "react-icons/md";

const Work_card = () => {
  return (
    <div className='Work_card' style={{backgroundImage:`url(${work})`}}>
      <Link to="/work">Explore <MdArrowOutward/></Link>
    </div>
  )
}

export default Work_card
