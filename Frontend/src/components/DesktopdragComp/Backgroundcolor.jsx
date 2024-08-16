import React from "react";
import "./Main.css";

const Backgroundcolor = ({
  setbackgroundcolor,
  setTextcolor,
  setButtoncolor,
}) => {
  return (
    <div className="backgroundcolor">
      <div>
        <h1>Background Color</h1>
        <button
          onClick={() => {
            setbackgroundcolor("red");
          }}
          style={{ backgroundColor: "red" }}
        ></button>
        <button
          onClick={() => {
            setbackgroundcolor("yellow");
          }}
          style={{ backgroundColor: "yellow" }}
        ></button>
        <button
          onClick={() => {
            setbackgroundcolor("green");
          }}
          style={{ backgroundColor: "green" }}
        ></button>
        <button
          onClick={() => {
            setbackgroundcolor("blue");
          }}
          style={{ backgroundColor: "blue" }}
        ></button>
        <button
          onClick={() => {
            setbackgroundcolor("white");
          }}
          style={{ backgroundColor: "white" }}
        ></button>
      </div>
      <div>
        <h1>Text Color</h1>
        <button
          onClick={() => {
            setTextcolor("red");
          }}
          style={{ backgroundColor: "red" }}
        ></button>
        <button
          onClick={() => {
            setTextcolor("yellow");
          }}
          style={{ backgroundColor: "yellow" }}
        ></button>
        <button
          onClick={() => {
            setTextcolor("green");
          }}
          style={{ backgroundColor: "green" }}
        ></button>
        <button
          onClick={() => {
            setTextcolor("blue");
          }}
          style={{ backgroundColor: "blue" }}
        ></button>
        <button
          onClick={() => {
            setTextcolor("white");
          }}
          style={{ backgroundColor: "white" }}
        ></button>
      </div>
      <div>
        <h1>Button Color</h1>
        <button
          onClick={() => {
            setButtoncolor("red");
          }}
          style={{ backgroundColor: "red" }}
        ></button>
        <button
          onClick={() => {
            setButtoncolor("yellow");
          }}
          style={{ backgroundColor: "yellow" }}
        ></button>
        <button
          onClick={() => {
            setButtoncolor("green");
          }}
          style={{ backgroundColor: "green" }}
        ></button>
        <button
          onClick={() => {
            setButtoncolor("blue");
          }}
          style={{ backgroundColor: "blue" }}
        ></button>
        <button
          onClick={() => {
            setButtoncolor("white");
          }}
          style={{ backgroundColor: "white" }}
        ></button>
      </div>
    </div>
  );
};

export default Backgroundcolor;
