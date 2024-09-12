import react, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee_comp/Marquee";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Pin from "../components/Services/Pin.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Enquire_section from "../components/Enquire_section/Enquire_section.jsx";
import Play_reel_section from "../components/Play_reel_section/Play_reel_section.jsx";
import Contact_video from "../components/Contact_Video/Contact_video.jsx";

const Home = () => {
  const mainRef = useRef(null);
  const scroll = new LocomotiveScroll();
  return (
    <main  style={{ overflowX: "hidden" }} data-scroll-container>
      <Navbar />
      <Hero />
      <Marquee />
      <Play_reel_section />
      {/* <Pin/> */}
      <Enquire_section />
      <Testimonial />
      <Contact_video/>
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
