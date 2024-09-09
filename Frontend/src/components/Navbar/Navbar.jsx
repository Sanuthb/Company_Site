import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../assets/logo.png";
import Navbartoggle from "./NAVBAR_COMP/Navbartoggle";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navtrigger, setnavtrigger] = useState(false);

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="stree2site" />
        </div>
        <div
          className="menu_bar"
          onClick={() => {
            setnavtrigger(true);
          }}
        >
          {navtrigger ? <RxCross2 /> : <FaAlignRight />}
        </div>
      </div>
      <Navbartoggle navtrigger={navtrigger} setnavtrigger={setnavtrigger} />
    </nav>
  );
};

export default Navbar;
