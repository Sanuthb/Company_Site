import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About_landing from "../components/About_page_comp/About_landing/About_landing";
import about_office from "../assets/about_office.jpg";

const About = () => {
  return (
    <main>
      <Navbar />
      <About_landing />
      <div
        className="about_text_para"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2vw",
        }}
      >
        <h5 style={{ fontSize: "2rem" }}>Shaping the digital world,</h5>
        <p style={{ fontSize: "1.3rem" }}>enjoying every step.</p>
      </div>
      <div style={{ padding: "3vw" }}>
        <img
          src={about_office}
          alt="about_office"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />
      </div>
      
    </main>
  );
};

export default About;
