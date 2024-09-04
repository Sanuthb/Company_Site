import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About_landing from "../components/About_page_comp/About_landing/About_landing";
import LocomotiveScroll from "locomotive-scroll";


const About = () => {
  const scroll = new LocomotiveScroll();
  return (
    <main>
      <Navbar />
      <About_landing />
    </main>
  );
};

export default About;
