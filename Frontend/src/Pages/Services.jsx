import React from "react";
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
      <Navbar />
      <Enquire_popup/>
      <Service_landing_card />
        <div className="service_page_our_works">
        <Service_page_comp text={"UI/UX"} color={"#ffd014"}/>
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
