import react from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee_comp/Marquee";
import About from "../components/About/About";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Pin from "../components/Services/Pin.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Enquire_section from '../components/Enquire_section/Enquire_section.jsx'
import Play_reel_section from "../components/Play_reel_section/Play_reel_section.jsx";

const Home = () => {
  const scroll = new LocomotiveScroll()
  return (
    <main data-scroll-container>
      <Navbar />
      <Hero />
      <Marquee />
      <Play_reel_section/>
      {/* <About /> */}
      <Pin/>
      <Enquire_section/>
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
