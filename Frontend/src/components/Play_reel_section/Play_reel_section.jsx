import React, { useRef, useEffect } from "react";
import "./Play_reel_section.css";
import reel_mockup from "../../assets/Video/Welcome.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowSize from "../../Hooks/useWindowSize";
// import WindowWidth from "../../Hooks/WindowWidth";

const Play_reel_section = () => {
  const sectionRef = useRef(null);
  const videocontinerRef = useRef(null);
  const videoRef = useRef(null);

  // const windowWidth = WindowWidth()
  // const windowSize = useWindowSize()
  // console.log(windowSize.width)
  useEffect(() => {
    if (true) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          markers: true,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        videocontinerRef.current,
        {
          scale: 3.5,
        },
        "same"
      );

      tl.to(
        videoRef.current,
        {
          borderRadius: "0vw",
          duration: 0.5,
        },
        "same"
      );
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
