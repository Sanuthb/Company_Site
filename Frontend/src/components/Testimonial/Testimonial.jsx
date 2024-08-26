import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  const testimonials = [
    "This web design company created a sleek, professional site that perfectly showcases our towing services. Their attention to detail has already increased customer inquiries. We couldn’t be happier!",
    "They captured our artistic identity with a bold, visually stunning website. The booking system they integrated has streamlined our operations. Their creativity and professionalism were top-notch!",
    "They delivered a clean, user-friendly design that effectively communicates our SaaS product’s value. Their ability to simplify complex ideas into a modern design has been a game-changer for us!",
  ];
  return (
    <div>
      <h1>What Our Clients Say</h1>
      <div className={styles.Container}>
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className={styles.testimonailContainer}>
                <div className={styles.top}>
                    <div>ci</div>
                </div>
              <p>{testimonial}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
