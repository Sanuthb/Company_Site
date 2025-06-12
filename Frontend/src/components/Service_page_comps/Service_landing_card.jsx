import React from "react";
import { motion } from "framer-motion";

const Service_landing_card = () => {
  return (
    <motion.div
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "100%",
        height: "60vh",
        padding: "2rem",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        color: "#1a1a1a",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "bold",
            margin: 0,
            textShadow: "1px 1px 8px rgba(0,0,0,0.1)",
          }}
        >
          Solutions Tailored for You
        </h1>
        <p
        >
          Discover services designed to meet your unique goals and elevate your
          business to the next level.
        </p>
      </div>
    </motion.div>
  );
};

export default Service_landing_card;
