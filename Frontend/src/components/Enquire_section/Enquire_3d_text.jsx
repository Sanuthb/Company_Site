import React, { useEffect } from "react";
import "./Enquire_section.css";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

const Enquire_3d_text = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray(".text_wrapper_text");
    const tl = gsap.timeline({ repeat: -1 });
    titles.forEach((title,index) => {
      const SplitText = new SplitTextJS(title);
      tl.fromTo(
        SplitText.chars,
        {
          y: 40,
          opacity: 0,
          rotateX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.02,
          duration: 1,
          ease: "power2.out",
        },
        `<${index * 1}`
      ).to(
        SplitText.chars,
        {
          y: -40,
          opacity: 0,
          rotateX: 90,
          stagger: 0.02,
          duration: 1,
          ease: "power2.in",
        },
        `+=${0.9}`
      );
    });
  }, []);

  return (
    <div className="text_wrapper">
      <h1 className="text_wrapper_text">Let's Build Something Amazing</h1>
      <h1 className="text_wrapper_text">Expert Team at Your Service</h1>
      <h1 className="text_wrapper_text">Transform Your Vision</h1>
      <h1 className="text_wrapper_text">Start Your Journey with Us</h1>
    </div>
  );
};

export default Enquire_3d_text;
