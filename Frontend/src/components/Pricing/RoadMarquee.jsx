import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./RoadMarquee.css"; // Import your CSS for styling

const RoadMarquee = () => {
  const roadRef = useRef(null);
  const roadRef2 = useRef(null);

  useEffect(() => {
    const element = roadRef.current;
    const element2 = roadRef2.current;

    gsap.to(element, {
      xPercent: -100, // Move the road pattern to the left
      ease: "linear",
      repeat: -1, // Infinite loop
      duration: 10, // Adjust this value to change the speed of the road
    });

    gsap.to(element2, {
      xPercent: -100, // Move the road pattern to the left
      ease: "linear",
      repeat: -1, // Infinite loop
      duration: 10, // Adjust this value to change the speed of the road
    });
  }, []);

  return (
    <div className="road-wrapper">
      <div className="road-container" ref={roadRef}>
        <div className="road">
          <div className="road-segment"></div>
          <div className="road-segment"></div>
          <div className="road-segment"></div>
        </div>
      </div>
      <div className="road-container" ref={roadRef2}>
        <div className="road">
          <div className="road-segment"></div>
          <div className="road-segment"></div>
          <div className="road-segment"></div>
        </div>
      </div>
    </div>
  );
};

export default RoadMarquee;
