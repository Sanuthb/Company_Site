import React from "react";
import styles from "./Footer.module.css";
import twitter from "../../assets/twitterx.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/logo.png";
import footerImg from "../../assets/footer.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img src={footerImg} alt="" />

      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.container}>
          <div className={styles.pagesContainer}>
            <div className={styles.explore}>
              <h3>Explore</h3>
            </div>
            <ol className={styles.pages}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ol>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.contact}>
              <h3>Contact</h3>
              <p>91+ 1234567890</p>
            </div>
            <div className={styles.address}>
              <h3>Address</h3>
              <p>
                492, Dodda Thoguru, Konappana Agrahara,
                <br />
                Electronic City, Bengaluru, Karnataka 560100
              </p>
            </div>
          </div>
          <div className={styles.socialsContainer}>
            <div className={styles.email}>
              <h3>Email</h3>
              <a href="mailto:support@example.com">support@example.com</a>
            </div>
            <div className={styles.social}>
              <a href="https://www.twitter.com" target="_blank">
                <img
                  src={twitter}
                  alt="Twitter"
                  className={styles.socialIcon}
                />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img
                  src={instagram}
                  alt="Instagram"
                  className={styles.socialIcon}
                />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        </div>
        {/* <img src={logo} alt="Company Logo" /> */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />

          <h1>Street2Site</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
