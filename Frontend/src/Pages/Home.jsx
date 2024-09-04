import react from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee_comp/Marquee";
import About from "../components/About/About";
import ServiceGallery from "../components/Services/ServiceGallery.jsx";
import Services from "../components/Services/Services.jsx";
import Coding from "../components/Coding/Coding";
import Pricing from "../components/Pricing/Pricing";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Pin from "../components/Services/Pin.jsx";

const Home = () => {
  const scroll = new LocomotiveScroll()
  return (
    <main data-scroll-container>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      {/* <ServiceGallery /> */}
      <Pin/>
      {/* <Coding /> */}
      {/* <Pricing /> */}

      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
