import React from "react";
import "./OurService.css";
import web1 from "../../assets/Service/webservice/web1.jpg";
import web2 from "../../assets/Service/webservice/web2.jpg";
import web3 from "../../assets/Service/webservice/web3.jpg";
import uiux1 from "../../assets/Service/uiux/uiux1.jpg";
import uiux2 from "../../assets/Service/uiux/uiux2.jpg";
import uiux3 from "../../assets/Service/uiux/uiux3.jpg";
import merchd1 from "../../assets/Service/merchd/merchd1.jpg";
import merchd2 from "../../assets/Service/merchd/merchd2.jpg";
import merchd3 from "../../assets/Service/merchd/merchd3.jpg";
import psimg from "../../assets/Service/problemsolving.jpg";
import psimg2 from "../../assets/Service/psimg2.jpg";
import crm from "../../assets/Service/crm.avif";
import crm2 from "../../assets/Service/crm2.avif";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Automated Customer Support",
    description: "Effortlessly manage customer interactions. (Coming Soon)",
    color: "light-blue",
  },
  {
    title: "Smart Problem-Solving",
    description: "Fix website challenges with expert-driven solutions.",
    color: "dark-yellow",
  },
];

const OurServices = () => {
  return (
    <div className="service_container">
      <div className="service_heading">
        <h1>
          One Idea. <br /> Unlimited Possibilities.
        </h1>
        <p>
          Street2Site helps you build websites, optimize SEO, and design
          branding effortlessly.
        </p>
      </div>
      <div className="service_grid">
        <Link to="/service" className="service_card light-blue">
          <div className="serviceheading">
            <h2>Smart Website Builder</h2>
            <p>Build stunning websites effortlessly.</p>
          </div>
          <div className="webserviceimages serviceimages">
            <img src={web1} alt="webservice" />
            <img src={web2} alt="webservice" />
            <img src={web3} alt="webservice" />
          </div>
        </Link>
        <Link to="/service" className="service_card yellow">
          <div className="serviceheading">
            <h2>UI/UX Perfection</h2>
            <p>Enhance user experience with sleek and modern designs.</p>
          </div>
          <div className="serviceimages uiuximages padding_cont">
            <img src={uiux1} alt="uiuxserviceimages" />
            <img src={uiux2} alt="uiuxserviceimages" />
            <img src={uiux3} alt="uiuxserviceimages" />
          </div>
        </Link>
        <Link to="/service" className="service_card blue">
          <div className="serviceheading">
            <h2>Merchandise Design</h2>
            <p>Create high-quality custom merchandise for your brand.</p>
          </div>
          <div className="merchdimages serviceimages padding_cont">
            <img src={merchd1} alt="merchdserviceimages" />
            <img src={merchd2} alt="merchdserviceimages" />
            <img src={merchd3} alt="merchdserviceimages" />
          </div>
        </Link>
        <Link to="/service" className="service_card dark-blue seocard">
          <div className="serviceheading seo">
            <h2>SEO Optimizer</h2>
            <p>Boost your site’s visibility with expert SEO strategies.</p>
          </div>
        </Link>
        <Link to="/service" className="service_card dark-yellow">
          <div className="serviceheading">
            <h2>Smart Problem-Solving</h2>
            <p>Fix website challenges with expert-driven solutions.</p>
          </div>
          <div className="psimages serviceimages padding_cont">
            <img src={psimg2} alt="psimages" />
            <img src={psimg} alt="psimages" />
            <img src={psimg2} alt="psimages" />
          </div>
        </Link>
        <Link to="/service" className="service_card light-blue">
          <div className="serviceheading">
            <h2>Street2Site CRM</h2>
            <p>
              Streamline your business with our powerful CRM solution.
            </p>
          </div>
          <div className="aicontactimages serviceimages padding_cont">
            <img src={crm} alt="Street2Site CRM" />
            <img src={crm2} alt="Street2Site CRM" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
