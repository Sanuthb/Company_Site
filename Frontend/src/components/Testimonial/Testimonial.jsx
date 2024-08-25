import React from "react";
import styles from "./Testimonial.module.css";

import flower0 from "../../assets/flower/flower0.svg";
import flower1 from "../../assets/flower/flower1.svg";
import flower2 from "../../assets/flower/flower2.svg";

const flowerImages = [flower0, flower1, flower2];

const testimonials = [
  {
    text: "This web design company created a sleek, professional site that perfectly showcases our towing services. Their attention to detail has already increased customer inquiries. We couldn’t be happier!",
    name: "John Doe",
    company: "Doe Towing Services",
  },
  {
    text: "They captured our artistic identity with a bold, visually stunning website. The booking system they integrated has streamlined our operations. Their creativity and professionalism were top-notch!",
    name: "Jane Smith",
    company: "Smith Art Studio",
  },
  {
    text: "They delivered a clean, user-friendly design that effectively communicates our SaaS product’s value. Their ability to simplify complex ideas into a modern design has been a game-changer for us!",
    name: "Mike Johnson",
    company: "Tech Solutions Inc.",
  },
];

const Testimonial = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>What Our Clients Say</h1>
      <div className={styles.Container}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonailContainer}>
            <div className={styles.top}>
              <div className={styles.circleContainer}>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.testimonial}>
                <span>"</span>
                {testimonial.text}
                <span>"</span>
              </p>
              <div className={styles.client}>
                <span>{testimonial.name}</span>
                <span>{testimonial.company}</span>
              </div>
              <img src={flowerImages[index]} alt="" className={styles.flower} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
