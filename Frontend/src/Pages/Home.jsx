import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee_comp/Marquee";
import Testimonial from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Enquire_section from "../components/Enquire_section/Enquire_section.jsx";
import Contact_video from "../components/Contact_Video/Contact_video.jsx";
import PinVideo from "../components/PinVideo/PinVideo.jsx";
import Pin from "../components/Services/backservice/Pin.jsx";
import OurServices from "../components/Services/OurServices.jsx";
import Showcase from "../components/Showcase/Showcase.jsx";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Street2Site | Smart Website Builder & SEO Optimization</title>
        <meta
          name="description"
          content="Street2Site helps you build stunning websites quickly with smart design, powerful SEO optimization, and effective digital branding solutions."
        />
        <meta
          name="keywords"
          content="website builder, SEO optimization, digital branding, smart websites, UI/UX design, responsive website"
        />
        <link rel="canonical" href="https://www.street2site.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Street2Site | Smart Website Builder & SEO Optimization"
        />
        <meta
          property="og:description"
          content="Build stunning, SEO-optimized websites quickly with Street2Site. Elevate your online presence with effective digital branding and smart design."
        />
        <meta property="og:url" content="https://www.street2site.com/" />
        <meta
          property="og:image"
          content="https://www.street2site.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Street2Site | Smart Website Builder & SEO Optimization"
        />
        <meta
          name="twitter:description"
          content="Build stunning, SEO-optimized websites quickly with Street2Site. Elevate your online presence with effective digital branding and smart design."
        />
        <meta
          name="twitter:image"
          content="https://www.street2site.com/twitterx.svg"
        />
      </Helmet>
      <main style={{ overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <Marquee />
        {/* <PinVideo/> */}
        <OurServices />
        {/* <Pin/> */}
        {/* <Enquire_section /> */}
        <Showcase />
        <Testimonial />
        <Contact_video />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;
