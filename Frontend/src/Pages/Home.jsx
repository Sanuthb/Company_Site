import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Coding from "../components/Coding/Coding";
import Pricing from "../components/Pricing/Pricing";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Coding />
      <Pricing />
    </main>
  );
};

export default Home;
