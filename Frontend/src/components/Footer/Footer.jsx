import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer_logo">
        <img src={logo} alt="stree2site" />
        <h1>Stree2Site</h1>
      </div>
      <div className="footer_line"></div>
      <div className="footer_links">
        <div className="company_links">
          <div className="links">
            <h4>Explore</h4>
            <div>
              <Link to="/">Work</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Service</Link>
            </div>
          </div>
          <div className="links">
            <h4>Stalk Us</h4>
            <div>
              <Link to="#">LinkedIn</Link>
              <Link to="#">Instagram</Link>
              <Link to="#">X</Link>
            </div>
          </div>
          <div className="links contact_links">
            <div>
              <h4>Say hello</h4>
              <Link to="#">Street2sitee@gmail.com</Link>
            </div>
            <div>
              <h4>Long time no see</h4>
              <Link to="#">+91 1234567890</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_line"></div>
      <div className="footer_copyright">
        <h4>© Street2site 2024</h4>
      </div>
    </footer>
  );
};

export default Footer;
