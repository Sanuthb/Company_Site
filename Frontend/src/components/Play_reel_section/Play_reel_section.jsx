import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reel_mockup from "../../assets/Video/Welcome.mp4";
import "./Play_reel_section.css";

gsap.registerPlugin(ScrollTrigger);

const Play_reel_section = () => {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;

    const videoRect = videoContainer.getBoundingClientRect();
    const scaleX = window.innerWidth / videoRect.width;
    const scaleY = window.innerHeight / videoRect.height;
    const scaleToFill = Math.max(scaleX, scaleY);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom 80%",
        pin: true,
        scrub:4,
        markers: false, 
      },
    });

    tl.fromTo(videoContainer, {
      scale: 1,
    },{
      scale: scaleToFill,
      duration: 1,
      borderRadius: "0px",
    });

    return () => {
      tl.kill(); 
    };
  }, []);

  return (
    <div ref={sectionRef} className="play_reel_video">
      <div className="play_reel_video_container" ref={videoContainerRef}>
        <video src={reel_mockup} autoPlay muted loop />
      </div>
    </div>
  );
};

export default Play_reel_section;
