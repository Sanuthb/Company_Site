import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About_landing from "../components/About_page_comp/About_landing/About_landing";


const About = () => {
  return (
    <main data-scroll-container>
      <Navbar />
      <About_landing />
    </main>
  );
};

export default About;
