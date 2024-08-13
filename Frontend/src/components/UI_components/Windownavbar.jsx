import React from 'react'
import './Uidesign.css'
import { FaAlignRight } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Windownavbar = () => {
  return (
    <div className="windownavbar1">
      <img src={logo} alt="" />
      <div className="windowmenu">
        <FaAlignRight />
      </div>
    </div>
  );
}

export default Windownavbar
