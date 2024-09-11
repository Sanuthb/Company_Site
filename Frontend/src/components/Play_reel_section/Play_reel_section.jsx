import React, { useRef, useEffect } from "react";
import "./Play_reel_section.css";
import reel_mockup from "../../assets/Video/Welcome.mp4";
import gsap from "gsap";

const Play_reel_section = () => {
  const sectionRef = useRef(null);
  const videocontinerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); 

    if (mediaQuery.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          markers: false,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(videoRef.current, {
        scale: 3.5,
        duration: 1,
        borderRadius: "0px",
      });
    }
  }, []);

  return (
    <div className="Play_reel_section" ref={sectionRef}>
      <div className="play_reel_video" ref={videocontinerRef}>
        <video ref={videoRef} src={reel_mockup} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default Play_reel_section;
