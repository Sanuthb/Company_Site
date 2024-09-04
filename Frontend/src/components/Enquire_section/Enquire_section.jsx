import React, { useRef, useEffect, useState } from "react";
import "./Enquire_section.css";
import Enquire_3d_text from "./Enquire_3d_text";
import gsap from "gsap";
import Enquire_popup from "../Enquire_popup/Enquire_popup";
import { useSetRecoilState } from "recoil";
import { Enquiry_popup_tigger } from "../../Atoms/Enquiry_atom/Enquiry_atom";

const Enquire_section = () => {
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const setenquiryTrigger = useSetRecoilState(Enquiry_popup_tigger)

  useEffect(() => {
    const button = buttonRef.current;
    const section = sectionRef.current;

    if (button && section) {
      const sectionRect = section.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const getRandomPosition = () => {
        let x, y;
        do {
          x = Math.random() * (sectionRect.width - buttonRect.width);
          y = Math.random() * (sectionRect.height - buttonRect.height);
        } while (!isWithinBounds(x, y));

        return { x, y };
      };
      const isWithinBounds = (x, y) => {
        return (
          x >= 0 &&
          x <= sectionRect.width - buttonRect.width &&
          y >= 0 &&
          y <= sectionRect.height - buttonRect.height
        );
      };

      function handleMouseEnter() {
        const { x, y } = getRandomPosition();
        gsap.to(button, {
          x,
          y,
        });
      }

      button.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, []);

  return (
    <div className="Enquire_section" ref={sectionRef}>
      <div className="enquire_container">
        <div className="enquire_container1">
          <div className="enquire_heading">
            <h3>
              Connect to Every{" "}
              <span
                style={{
                  color: "var(--clr--primary-orange)",
                  textTransform: "uppercase",
                  fontSize: "2.3rem",
                  fontWeight: "900",
                }}
              >
                Opportunity
              </span>
            </h3>
          </div>
          <div className="enquire_paragraph">
            <p>Explore how we can bring your vision to life.</p>
          </div>
        </div>
        <div className="enquire_container1">
          <Enquire_3d_text />
        </div>
        <div className="enquire_container1 enquire_buttons">
          <button className="enquire_button" onClick={() => {setenquiryTrigger(true);}}>Try Us</button>
          <div className="enquire_play_button" ref={buttonRef}>
            <button className="enquire_button">Don't Try Us</button>
          </div>
        </div>
      </div>
      <Enquire_popup/>
    </div>
  );
};

export default Enquire_section;
