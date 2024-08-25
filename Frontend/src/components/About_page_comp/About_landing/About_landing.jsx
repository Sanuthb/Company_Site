import React from "react";
import "./About_landing.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const About_landing = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_start_year",
        scroller: "body",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        markers: false,
        pin: true,
      },
    });

    tl.to(
      ".about_div1",
      {
        top: "-50%",
      },
      "same_time"
    );
    tl.to(
      ".about_div3",
      {
        top: "100%",
      },
      "same_time"
    );
    tl.to(
      ".top_h",
      {
        y: "80%",
      },
      "same_time"
    );
    tl.to(
      ".bottom_h",
      {
        y: "-80%",
      },
      "same_time"
    );
  });

  return (
    <div className="about_start_year">
      <div className="about_div1">
        <div className="about_year">
          <h1 className="top_h">Est.2023</h1>
        </div>
      </div>
      <div className="about_div2">
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
      </div>
      <div className="about_div3">
        <div className="about_year">
          <h1 className="bottom_h">
            Est.2023
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About_landing;
