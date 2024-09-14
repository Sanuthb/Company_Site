import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee_comp/Marquee";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Pin from "../components/Services/Pin.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Enquire_section from '../components/Enquire_section/Enquire_section.jsx'
import PinVideo from "../components/PinVideo/PinVideo.jsx";
import Enquire_section from "../components/Enquire_section/Enquire_section.jsx";
import Contact_video from "../components/Contact_Video/Contact_video.jsx";

const Home = () => {
  return (
    <main style={{ overflowX: "hidden" }} >
      <Navbar />
      <Hero />
      <Marquee />
      <PinVideo/>
      <Pin/>
      <Enquire_section />
      <Testimonial />
      <Contact_video />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
