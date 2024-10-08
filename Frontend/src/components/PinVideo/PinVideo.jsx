import React, { useRef } from "react";
import "./PinVideo.css";
import reel_mockup from "../../assets/Video/Welcome.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Play_reel_section = () => {
  const sectionRef = useRef(null);
  const videocontinerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {

    const mobile_screen = gsap.matchMedia();

    mobile_screen.add("(min-width:767px)",()=>{
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        markers: false,
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
  })
  });

  return (
    <div className="Play_reel_section" ref={sectionRef}>
      <div className="play_reel_video" ref={videocontinerRef}>
        <video ref={videoRef} src={reel_mockup} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default Play_reel_section;
