import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About_landing from "../components/About_page_comp/About_landing/About_landing";
import Footer from "../components/Footer/Footer";
import Additional_card from "../components/Additional_Cards/Additional_card";

const About = () => {
  return (
    <main data-scroll-container>
      <Navbar />
      <About_landing />
      <Additional_card/>
      <Footer />
    </main>
  );
};

export default About;
