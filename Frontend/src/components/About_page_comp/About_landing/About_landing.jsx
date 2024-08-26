import React from "react";
import "./About_landing.css";
import about_page_animation from "../../../Gsap_Animation/About_animation";
import about_office from "../../../assets/about_office.jpg";
import Company_culture from "../Company_culture/Company_culture";

const About_landing = () => {
  about_page_animation(
    ".about_landing_section",
    ".about_top_container",
    ".about_bottom_container",
    ".dummy_box",
    ".about_company_story",
    ".about_text_para",
    ".about_image img",
    ".our_culture"
  );

  return (
    <div className="about_landing_section">
      <div className="about_main_year about_top_container">
        <h1>Est. 2023</h1>
      </div>
      <div className="about_content">
        <div className="dummy_box"></div>
        <div className="about_company_story">
          <p>
            <span style={{ fontWeight: "600", color: "white" }}>
              Street2Site
            </span>{" "}
            started in 2023 with a passionate team of{" "}
            <span style={{ fontWeight: "600", color: "white" }}>
              web developers, designers, and marketers
            </span>{" "}
            who wanted to help every business shine online. We believed that no
            one should struggle to make their mark on the web.
          </p>
          <p>
            Fueled by this belief, we set out to turn great ideas into powerful{" "}
            <span style={{ fontWeight: "600", color: "white" }}>
              digital experiences
            </span>
            . Our goal was to make online success attainable for every business,
            no matter its size.
          </p>
          <p>
            Today, we’re proud to have worked with a diverse range of clients,
            creating{" "}
            <span style={{ fontWeight: "600", color: "white" }}>websites</span>{" "}
            and{" "}
            <span style={{ fontWeight: "600", color: "white" }}>
              digital solutions
            </span>{" "}
            that truly make a difference. For us, it’s all about combining{" "}
            <span style={{ fontWeight: "600", color: "white" }}>
              creativity
            </span>{" "}
            and deep understanding to deliver results that matter.
          </p>
        </div>
        <div className="about_text_para">
          <h5>Shaping the digital world,</h5>
          <p>enjoying every step.</p>
        </div>
        <div className="about_image">
          <img src={about_office} alt="" />
        </div>
        <div className="our_culture">
          <Company_culture/>
        </div>
      </div>
      <div className="about_main_year about_bottom_container">
        <h1>Est. 2023</h1>
      </div>
    </div>
  );
};

export default About_landing;
