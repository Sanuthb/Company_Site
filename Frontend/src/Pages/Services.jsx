import React from "react";
import { Helmet } from "react-helmet";
import Service_page_comp from "../components/Service_page_comps/Service_page_comp";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Service_landing_card from "../components/Service_page_comps/Service_landing_card";
import Additional_card from "../components/Additional_Cards/Additional_card";
import Enquire_popup from "../components/Enquire_popup/Enquire_popup";
import Review from "../components/Review/Review";
import "./Service.css"; 

const Services = () => {
  return (
    <main>
      <Helmet>
        <title>Our Services | Street2Site – UI/UX, Web Design, SEO, CRM & Branding</title>
        <meta
          name="description"
          content="Explore Street2Site's UI/UX, web design, SEO, CRM, Success Solutions, Merch Art, and branding services. Empower your business with expert digital solutions."
        />
        <meta
          name="keywords"
          content="UI/UX design, web design, SEO, CRM, branding, Success Solution, Merch Art, Street2Site services"
        />
        <link rel="canonical" href="https://www.street2site.com/services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services | Street2Site – UI/UX, Web Design, SEO, CRM & Branding" />
        <meta
          property="og:description"
          content="Street2Site offers UI/UX, web design, SEO, CRM, branding, Success Solutions, and Merch Art for digital growth of your business."
        />
        <meta property="og:url" content="https://www.street2site.com/services" />
        <meta property="og:image" content="https://www.street2site.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Street2Site – UI/UX, Web Design, SEO, CRM & Branding" />
        <meta
          name="twitter:description"
          content="Get UI/UX, web design, branding, SEO, CRM, Success Solutions, and Merch Art services from Street2Site's expert team."
        />
        <meta name="twitter:image" content="https://www.street2site.com/twitter-image.jpg" />
      </Helmet>
      <Navbar />
      <Enquire_popup/>
      <Service_landing_card />
      <div className="service_page_our_works">
        <Service_page_comp text={"UI/UX"} color={"#ffd014"} />
        <Service_page_comp text={"Web Designing"} color={"#d5defb"} />
        <Service_page_comp text={"Merch Art"} color={"#a6b4fc"} />
        <Service_page_comp text={"Success Solution"} color={"#ffa805"} />
        <Service_page_comp text={"SEO"} color={"#463acb"} />
        <Service_page_comp text={"CRM"} color={"#d5defb"} />
      </div>
      <div>
        <Review/> 
      </div>
      <Additional_card/>
      <Footer />
    </main>
  );
};

export default Services;
