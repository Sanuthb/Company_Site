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
    ".about_image",
    ".about_image img",
    ".about_top_container h1",
  );

  return (
    <div className="about_landing_section">
      <div className="about_landing_animation">
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
              is not just a name—it’s our journey.
            </p>
            <p>
              We began in 2023 as a group of four undergraduates with a vision and no resources. We didn’t even have ₹1500 to buy our first domain. After months of waiting, one of our co-founders won a small competition, and with that prize money—we bought our domain and launched our dream.
            </p>
            <p>
              In the beginning, we walked through streets, going shop to shop, handing out self-printed A4 color sheets as brochures because that’s all we could afford. We faced rejections, questions, and even humiliation—but we never gave up.
            </p>
            <p>
              One company even told us we weren’t good enough. Months later, they came back with an offer—but we had already moved forward.
            </p>
            <p>
              <span style={{ fontWeight: "600", color: "white" }}>
                Street2Site is not just a name. It's a reflection of who we are and where we come from.
              </span>{" "}
              We started in the streets, and now we’re on the site—to elevate others like us from the streets to the site.
            </p>
            <p>
              Today, we’re proud to empower businesses with meaningful{" "}
              <span style={{ fontWeight: "600", color: "white" }}>
                websites
              </span>{" "}
              and{" "}
              <span style={{ fontWeight: "600", color: "white" }}>
                digital solutions
              </span>
              , helping them build their own success stories.
            </p>
          </div>
        </div>
        <div className="about_main_year about_bottom_container">
          <h1>Est. 2023</h1>
        </div>
      </div>
      
      <div className="about_text_para">
        <h5>From the streets to the site,</h5>
        <p>we're here to lift others the way we lifted ourselves.</p>
      </div>
      <div className="about_image">
        <img src={about_office} alt="Our humble beginning" />
      </div>
      <div className="our_culture">
        <Company_culture />
      </div>
    </div>
  );
};

export default About_landing;
