import React, { useRef } from "react";
import "./UIdesign.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Uitoggle = () => {
  const circleref = useRef();

  useGSAP(() => {
    gsap.to(circleref.current, {
      duration: 1.3,
      delay:1,
      x: "200%",
      yoyo: true,
      repeat: -1,
      ease: "poweri.inOut"
    })
  })

  return (
    <div className="uitogglebtn">
      <div ref={circleref} className="circle"></div>
    </div>
  );
};

export default Uitoggle;
