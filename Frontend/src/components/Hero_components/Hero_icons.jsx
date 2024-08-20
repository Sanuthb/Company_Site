import React from "react";
import "./Hero_comp.css";

const Hero_icons = ({ rotate}) => {
  return (
    <div
      className="hero_icons"
      style={{ transform: rotate}}
    ></div>
  );
};

export default Hero_icons;
