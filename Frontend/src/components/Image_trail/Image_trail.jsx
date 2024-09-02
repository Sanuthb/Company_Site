import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./ImageTrail.css";

const Image_trail = ({ images, section }) => {
  const imageRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState(null);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Clear any existing timeout to prevent rapid animations
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const tl = gsap.timeline();

      tl.to(imageRefs.current, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        stagger: -0.1,
        ease: "power3.out",
        duration: 0.5,
      });

      tl.to(imageRefs.current, {
        opacity: 0,
        stagger: -0.1,
        delay: 1, 
        ease: "power3.in",
        duration: 0.5,
      });
    };

    const handleMouseStop = () => {
      timeoutId = setTimeout(() => {
        gsap.to(imageRefs.current, {
          x: (mousePosition || {}).x,
          y: (mousePosition || {}).y,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        });
      }, 200); 
    };

    const sectionElement = document.querySelector(section);
    if (sectionElement) {
      sectionElement.addEventListener("mousemove", handleMouseMove);
      sectionElement.addEventListener("mouseleave", handleMouseStop); 
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener("mousemove", handleMouseMove);
        sectionElement.removeEventListener("mouseleave", handleMouseStop);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [section, mousePosition]);

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
