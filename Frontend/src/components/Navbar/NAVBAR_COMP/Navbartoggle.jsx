import React from "react";
import "./Navbartoggle.css";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbartoggle = ({ navtrigger, setnavtrigger }) => {
  if (!navtrigger) return null;
  return (
    <motion.div
      className="Navbartoggle"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="navtogglesidebar"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="navtogglesidebar_close"
          onClick={() => setnavtrigger(false)}
          initial={{ y:"100%",opacity: 0 }}
          animate={{ y:0,opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <RxCross2 />
        </motion.div>
        <ul className="navtogglesidebar_list">
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/" >Home</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/service">Service</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>
        <motion.div
          className="navtogglesidebar_social"
          initial={{ x:"100%",opacity:0 }}
          animate={{ x:0,opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <FaInstagram />
          <FaXTwitter />
          <FaFacebookF />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbartoggle;
