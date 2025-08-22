import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import About_landing from "../components/About_page_comp/About_landing/About_landing";
import Footer from "../components/Footer/Footer";
import Additional_card from "../components/Additional_Cards/Additional_card";

const About = () => {
  return (
    <main data-scroll-container>
      <Helmet>
        <title>
          About Us | Street2Site – Web Development, CRM, CMS & SaaS Experts
        </title>
        <meta
          name="description"
          content="Learn about Street2Site: experts in website building, SEO, CRM systems, CMS solutions, and SaaS product development. Discover our mission, team, and innovative approach."
        />
        <meta
          name="keywords"
          content="About Street2Site, web development, CRM development, CMS builder, SaaS products, SEO experts, digital branding, technology team"
        />
        <link rel="canonical" href="https://www.street2site.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Street2Site – Web, CRM, CMS, & SaaS Experts" />
        <meta
          property="og:description"
          content="Meet Street2Site: trusted partners for building websites, CRM and CMS solutions, and SaaS products. Discover our story and commitment to digital excellence."
        />
        <meta property="og:url" content="https://www.street2site.com/about" />
        <meta property="og:image" content="https://www.street2site.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Street2Site – Web, CRM, CMS, & SaaS Experts" />
        <meta
          name="twitter:description"
          content="Street2Site delivers expert website development, CRM, CMS, and SaaS solutions to help your business grow online."
        />
        <meta name="twitter:image" content="https://www.street2site.com/twitter-image.jpg" />
      </Helmet>
      <Navbar />
      <About_landing />
      <Additional_card/>
      <Footer />
    </main>
  );
};

export default About;
