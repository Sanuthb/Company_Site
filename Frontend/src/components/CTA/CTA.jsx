import React from "react";

import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <div className={styles.container}>
      <p>Get Ready to Maximize Your Productivity <br /> With Our Workflow Solutions</p>
      <button className={styles.CTA}>Contact Us</button>
    </div>
  );
};

export default CTA;
