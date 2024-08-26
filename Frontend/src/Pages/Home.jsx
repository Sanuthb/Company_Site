import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Enquire_section from "../components/Enquire_section/Enquire_section";
import Coding from "../components/Coding/Coding";
import Pricing from "../components/Pricing/Pricing";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Enquire_section />
      <Coding />
      <Pricing />
      <Testimonial />
      <CTA/>
      <Footer/>
    </main>
  );
};

export default Home;
