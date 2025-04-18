import React from "react";
import "./Hero.css";
import useEyeMovement from "../../Hooks/useEyeballmovement";
import { motion } from 'framer-motion'
import { useSetRecoilState } from "recoil";
import { Enquiry_popup_tigger } from "../../Atoms/Enquiry_atom/Enquiry_atom";
import Enquire_popup from "../Enquire_popup/Enquire_popup";
// import Editornavbar from "../Editorcomponents/Editornavbar";
// import Editor_sidebar from "../Editorcomponents/Editor_sidebar";
// import Code_Editor from "../Editorcomponents/Code_Editor";
// import { FaHtml5 } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { FaReact } from "react-icons/fa6";

const Hero = () => {

  useEyeMovement(".eyeball", ".ball");

  const setenquirytigger = useSetRecoilState(Enquiry_popup_tigger)
  
  return (
    <div
      className="hero"
    >
      <div className="hero_content">
        <div className="hero_heading">
          <h1>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            Design
          </h1>
          <h1>Meets</h1>
          <h1>
            <div className="eyeball">
              <div className="ball"></div>
            </div>
            <div className="eyeball">
              <div className="ball"></div>
            </div>
            Precision
          </h1>
        </div>
        <div className="hero_para">
          <p>
            With just a few clicks, Street2Site brings your business to life,
            allowing you to focus on perfecting the final, impactful details.
          </p>
        </div>
        <div className="hero_btn">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onClick={()=>{setenquirytigger(true)}}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <Enquire_popup/>
    </div>
  );
};

export default Hero;
