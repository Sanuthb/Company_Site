import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee_comp/Marquee";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Enquire_section from "../components/Enquire_section/Enquire_section";
import Coding from "../components/Coding/Coding";
import Pricing from "../components/Pricing/Pricing";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main >
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Enquire_section />
      <Coding />
      <Pricing />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
