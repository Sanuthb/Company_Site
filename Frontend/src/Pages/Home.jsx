import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Coding from "../components/Coding/Coding";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Coding />
    </main>
  );
};

export default Home;
