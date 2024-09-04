import React, { useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import "./Enquiry_close_btn.css";
import gsap from "gsap";
import { useSetRecoilState } from "recoil";
import { Enquiry_popup_tigger } from "../../Atoms/Enquiry_atom/Enquiry_atom";

const Enquiry_close_btn = () => {
  const sectionRef = useRef(null);
  const closeTextRef = useRef(null);
    const closeIconRef = useRef(null);
    const setenquiryTrigger= useSetRecoilState(Enquiry_popup_tigger)

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const closeTextEl = closeTextRef.current;
    const closeIconEl = closeIconRef.current;

    const handleMouseMove = (e) => {
      const sectionRect = sectionEl.getBoundingClientRect();
      const iconRect = closeIconEl.getBoundingClientRect();

      const X = e.clientX - sectionRect.left;
      const Y = e.clientY - sectionRect.top;

      const offsetX = iconRect.width / 2;
      const offsetY = iconRect.height / 2;

      gsap.to([closeTextEl, closeIconEl], {
        x: X - offsetX,
        y: Y - offsetY,
        duration: 0.3,
        ease: "power1.out",
        stagger: 0.1, 
      });
    };

    sectionEl.addEventListener("mousemove", handleMouseMove);

    return () => {
      sectionEl.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="Enquiry_close_btn" ref={sectionRef}>
      <div className="Enquiry_close_container">
              <div className="close_icon" ref={closeIconRef} onClick={() => {setenquiryTrigger(false)}}>
          <RxCross2 />
        </div>
        <div className="close_text" ref={closeTextRef}>
          Close
        </div>
      </div>
    </div>
  );
};

export default Enquiry_close_btn;
