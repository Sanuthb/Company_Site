import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import Contact_landing from '../components/Contact_page_comp/Contact_landing/Contact_landing';
import NewContact from "../components/Contact_page_comp/Newcontactpage/NewContact";

const Contact = () => {
  return (
    <main>
      <Helmet>
        <title>Contact Us | Street2Site – Website, CRM, CMS & SaaS Experts</title>
        <meta
          name="description"
          content="Contact Street2Site for web development, CRM, CMS, SaaS products, or digital branding. Request a quote or speak with our expert team!"
        />
        <meta
          name="keywords"
          content="Contact Street2Site, web development, CRM, CMS, SaaS, SEO, quote, partnership"
        />
        <link rel="canonical" href="https://www.street2site.com/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Street2Site – Website, CRM, CMS & SaaS Experts" />
        <meta
          property="og:description"
          content="Connect with Street2Site for industry-leading website design, CRM, CMS, SaaS solutions, SEO, and digital branding."
        />
        <meta property="og:url" content="https://www.street2site.com/contact" />
        <meta property="og:image" content="https://www.street2site.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Street2Site – Website, CRM, CMS & SaaS Experts" />
        <meta
          name="twitter:description"
          content="Request a quote, book a call, or get support for web, CRM, CMS, or SaaS from Street2Site."
        />
        <meta name="twitter:image" content="https://www.street2site.com/twitter-image.jpg" />
      </Helmet>
      <Navbar />
      {/* <Contact_landing/> */}
      <NewContact/>
      <Footer/>
    </main>
  );
};

export default Contact;
