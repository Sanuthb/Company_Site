import React, { useState } from 'react'
import './Navbar.css'
import { FaAlignRight } from "react-icons/fa";
import logo from "../../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import {Link} from "react-router-dom"


const Navbar = () => {

  const [menuitems,setmenunitems] = useState(false)

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="stree2site" />
      </div>
      <div
        className="menu_bar"
        onClick={() => {
          setmenunitems(!menuitems);
        }}
      >
        {menuitems ? <RxCross2 /> : <FaAlignRight />}
      </div>

      <div className={menuitems ? "navitems active" : "navitems"}>
        <div className={menuitems ? "itembox itemactive" : "itembox"}>
          <div
            className="closebtn"
            onClick={() => {
              setmenunitems(!menuitems);
            }}
          >
            <RxCross2 />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="socials">
            <ul>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
