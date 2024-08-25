import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Enquire_section from "../components/Enquire_section/Enquire_section";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Enquire_section />
    </main>
  );
};

export default Home;
