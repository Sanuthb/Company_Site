import React from "react";
import "./Hero_comp.css";

const Hero_icons = ({ rotate,icons,color}) => {
  return (
    <div
      className="hero_icons"
      style={{
        transform: rotate,
        color: color,
        boxShadow: `-2px -1px 10px ${color}`,
      }}
    >
      {icons}
    </div>
  );
};

export default Hero_icons;
