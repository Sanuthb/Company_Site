import React from "react";
import "./Marquee.css";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      className="Marquee"
    >
      <div className="Marquee_container">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
        >
          We are Innovators
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
        >
          We are Innovators
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
