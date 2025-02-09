import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee_comp/Marquee";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Enquire_section from '../components/Enquire_section/Enquire_section.jsx'
import Contact_video from "../components/Contact_Video/Contact_video.jsx";
import PinVideo from "../components/PinVideo/PinVideo.jsx";
import Pin from "../components/Services/backservice/Pin.jsx";
import OurServices from "../components/Services/OurServices.jsx";

const Home = () => {
  return (
    <main style={{ overflowX: "hidden" }} >
      <Navbar />
      <Hero />
      <Marquee />
      {/* <PinVideo/> */}
      <OurServices/>
      {/* <Pin/> */}
      <Enquire_section />
      <Testimonial />
      <Contact_video />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
