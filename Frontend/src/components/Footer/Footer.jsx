import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.container}>

        <div className="pagesContainer">
            <div className="explore">
                <ol className="pages">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li></li>

                </ol>
            </div>
        </div>
      {/* <img src={logo} alt="" /> */}
    </footer>
  );
};

export default Footer;
