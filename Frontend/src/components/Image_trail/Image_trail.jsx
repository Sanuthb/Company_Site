// Image_trail.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ImageTrail.css";

const Image_trail = ({ images, section }) => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const tl = gsap.timeline();

      tl.to(imageRefs.current, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        stagger: -0.1,
        ease: "power3.out",
        duration: 0.5,
      }).to(imageRefs.current, {
        opacity: 0,
        stagger: -0.1,
        delay: 0.1, 
        ease: "power3.in",
        duration: 0.1,
      });
    };

    const sectionElement = document.querySelector(section);
    if (sectionElement) {
      sectionElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [section]);

  return (
    <div className="trail-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="image"
          ref={(el) => (imageRefs.current[index] = el)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Image_trail;
