import React from "react";
import { motion } from "framer-motion";
import styles from "./CTA.module.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className={styles.container}>
      <p>
        Get Ready to Maximize Your Productivity <br /> With Our Workflow
        Solutions
      </p>
      <Link to="/contact">
        <motion.h5
          className={styles.CTA}
          whileHover={{
            scale: 1.2,
            backgroundColor: "white",
            color: "var(--clr--primary-orange)",
            border: "1px solid var(--clr--primary-orange)",
          }}
        >
          Contact Us
        </motion.h5>
      </Link>
    </div>
  );
};

export default CTA;


