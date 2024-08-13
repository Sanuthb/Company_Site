import React from "react";
import "./Uidesign.css";

const Uicalander = ({ backgroundColor, color ,data }) => {
  const style = {
    backgroundColor: backgroundColor,
    width: "50px",
    height: "70px",
    borderRadius: "10px",
  };

  const textcolor = {
    color:color,
  }


  return (
    <div className="uicalanders" style={backgroundColor ? style : {}}>
      <div style={textcolor}>
        <p>{data.date}</p>
        <p>{data.month}</p>
      </div>
    </div>
  );
};

export default Uicalander;
