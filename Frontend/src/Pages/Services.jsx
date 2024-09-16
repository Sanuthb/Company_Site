import React from "react";
import Service_page_comp from "../components/Service_page_comps/Service_page_comp";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Service_landing_card from "../components/Service_page_comps/Service_landing_card";
import Additional_card from "../components/Additional_Cards/Additional_card";
import Enquire_popup from "../components/Enquire_popup/Enquire_popup";

const Services = () => {
  return (
    <main>
      <Navbar />
      <Enquire_popup/>
      <Service_landing_card />
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"column"}}>
        <Service_page_comp text={"UI/UX"} color={"#9B59B6"} />
        <Service_page_comp text={"Web Designing"} color={"#FF2D55"} />
        <Service_page_comp text={"SEO"} color={"#FF851B"} />
        <Service_page_comp text={"Success Solutions"} color={"#F7CA18"} />
      </div>
      <Additional_card/>
      <Footer />
    </main>
  );
};

export default Services;
