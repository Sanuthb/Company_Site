import React from "react";
import styles from "./CodingTitle.module.css";

const CodingTitle = ({ title }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.subheading}> {title.subheading}</h4>
      <h1 className={styles.heading}>{title.heading}</h1>
    </div>
  );
};

export default CodingTitle;
