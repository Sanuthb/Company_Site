import React from "react";
import { motion } from "framer-motion";
import styles from "./CTA.module.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Unlock Your Creative Potential</h2>
      <p className={styles.subtitle}>
        Experience the power of Street2Site with our service and start building like never before.
      </p>
      <Link to="/contact">
        <motion.button
          className={styles.ctaButton}
          whileHover={{
            scale: 1.05,
            backgroundColor: "white",
            color: "var(--clr--primary-orange)",
            border: "2px solid var(--clr--primary-orange)",
          }}
        >
          Enquire Now
        </motion.button>
      </Link>
    </div>
  );
};

export default CTA;
