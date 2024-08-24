import React, { useEffect, useRef } from "react";
import aeroplane from "../../assets/pricing/aeroplane.png";
import cloud1 from "../../assets/pricing/cloud1.png";
import cloud2 from "../../assets/pricing/cloud2.png";
import sun from "../../assets/pricing/sun.png";
import styles from "./Pricing.module.css";
import gsap from "gsap";
import RoadMarquee from "./RoadMarquee";

const Pricing = () => {
  const floatRef = useRef(null);
  useEffect(() => {
    const element = floatRef.current;
    const tl = gsap.timeline();

    // gsap.set(element, {
    //   xPercent: 20,
    // });
    // tl.to(element, {
    //   xPercent: 0,
    //   ease: "linear",
    //   duration: 0.5,
    // });
    tl.to(element, {
      y: 40,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "linear",
    });
  }, []);
  return (
    <div className={styles.contianer}>
      <div className={styles.natureContainer}>
        <img src={cloud1} alt="" className={styles.cloud1} />
        <img src={sun} alt="" className={styles.sun} />
        <img src={cloud1} alt="" className={styles.cloud2} />
        <img src={cloud2} alt="" className={styles.cloud3} />
      </div>
      <div className={styles.pricingContainer} ref={floatRef}>
        <div className={styles.aeroplaneContainer}>
          <img
            src={aeroplane}
            alt="Aeroplane"
            className={styles.aeroplaneImg}
          />
        </div>
        <div className={styles.tail}>
          <span className={styles.top}></span>
          <span className={styles.bottom}></span>
        </div>
        <div className={styles.Desciption}>
          <h1>Beautifully Priced Designs</h1>
        </div>
      </div>
      {/* <RoadMarquee /> */}
      <div className={styles.RoadContainer}>
        <RoadMarquee />
      </div>
      {/* <div className={styles.greenary}></div> */}
    </div>
  );
};

export default Pricing;
