import React from "react";
import { motion } from "framer-motion";
import styles from "./Testimonial.module.css";

import review from "../../assets/Videos/review.mp4";
import problemsolution from "../../assets/Videos/problemsolution.mp4";
import service from "../../assets/Videos/service.mp4";

const Testimonial = () => {
  return (
    <>
      <h1 className={styles.stories}>Stories of Success</h1>
      <div className={styles.section}>
        <motion.div
          className={`${styles.container} ${styles.blue}`}
          whileHover={{ y: -20 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <p>
            Top-notch service meets unparalleled client satisfaction, on every
            level!
          </p>
          <div>
            <video
              src={service}
              className={styles.video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.container} ${styles.pink}`}
          whileHover={{ y: -20 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <p>
            Five-star satisfaction, every project, every client, every time!
          </p>
          <div>
            <video
              src={review}
              className={styles.video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.container} ${styles.yellow}`}
          whileHover={{ y: -20 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <p>We handle problems, you enjoy the results. Simple as that! </p>
          <div>
            <video
              src={problemsolution}
              className={styles.video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Testimonial;
