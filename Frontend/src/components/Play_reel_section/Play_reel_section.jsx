import React, { useRef } from "react";
import "./Play_reel_section.css";
import reel_mockup from "../../assets/Video/Welcome.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Play_reel_section = () => {
  const sectionRef = useRef(null);
  const Play_heading = useRef(null);
  const Reel_heading = useRef(null);
  const videocontinerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(
      Play_heading.current,
      {
        x: 220,
        duration: 0.5,
      },
      "same"
    );
    tl.to(
      Reel_heading.current,
      {
        x: -220,
        duration: 0.5,
      },
      "same"
    );
    tl.fromTo(
      videocontinerRef.current,
      {
        width: "400px",
        height: "200px",
      },
      {
        width: "100%",
        height: "100%",
        duration: 0.5,
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
  });

  return (
    <div className="Play_reel_section" ref={sectionRef}>
      <div className="play_reel_scroll_text">
        <h1 ref={Play_heading}>PLAY</h1>
        <h1 ref={Reel_heading}>REEL</h1>
      </div>
      <div className="play_reel_video" ref={videocontinerRef}>
        <video ref={videoRef} src={reel_mockup} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default Play_reel_section;
