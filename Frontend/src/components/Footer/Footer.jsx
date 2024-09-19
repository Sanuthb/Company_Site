import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section company-info">
       <Link to='/' className="footer-logo"><h2>Street2Site</h2></Link>
        <p>Transforming streets into vibrant sites. Your urban development partner.</p>
        <div className="social-icons">
          <Link to="#"><FaFacebookF  /></Link>
          <Link to="#"><FaXTwitter /></Link>
          <Link to="#"><FaInstagram  /></Link>
          <Link to="#"><MdMailOutline/></Link>
        </div>
      </div>
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/work">Works</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section contact-info">
        <h3>Contact Us</h3>
        <address>
          <p>#492 Dodda Thoguru,</p>
          <p>Electronic City, Karnataka,560-100</p>
          <p>Phone: +91 9110815046</p>
          <p>Email: info@street2site.com</p>
        </address>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Street2Site. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;

