import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Company_culture.css";

const Company_culture = () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".Company_culture",
        scroller: "body",
        markers: false,
        start: "-10% 10%",
        end: "bottom 100%",
        scrub: 2,
      },
    });

    timeline
      .fromTo(
        ".companyculture1",
        { x: "-200%"},
        { x: "0%", duration: 0.5 },
        "same_time"
      )
      .fromTo(
        ".companyculture2",
        { x: "200%"},
        { x: "0%", duration: 0.5 },
        "same_time"
      )
      .fromTo(
        ".companyculture3",
        { x: "-200%" },
        { x: "0%", duration: 0.5 },
        "same_time1"
      )
      .fromTo(
        ".companyculture4",
        { x: "200%" },
        { x: "0%", duration: 0.5 },
        "same_time1"
      )
      .fromTo(
        ".companyculture5",
        { x: "-200%" },
        { x: "0%", duration: 0.5 },
        "same_time2"
      )
      .fromTo(
        ".companyculture6",
        { x: "200%" },
        { x: "0%", duration: 0.5 },
        "same_time2"
      );
  });

  return (
    <div className="Company_culture">
      <div className="companyculture1 companyculturebox">
        <h1>We didn’t just create websites; we crafted experiences.</h1>
        <p>The secret to a great digital presence? A team that cares.</p>
      </div>
      <div className="companyculture2 companyculturebox">
        <h1>3</h1>
        <p>
          That’s how many unique perspectives we bring together, each one
          enriched by a different cultural background.
        </p>
      </div>
      <div className="companyculture3 companyculturebox">
        <h1>100% Remote</h1>
        <p>We’re wherever you are (as long as there’s Wi-Fi).</p>
      </div>
      <div className="companyculture4 companyculturebox">
        <h1>6 Client Challenges</h1>
        <p>
          We listened, we solved, but only 2 saw our potential and hired
          us—proof that we’re selective about who we partner with.
        </p>
      </div>
      <div className="companyculture5 companyculturebox">
        <h1>
          Client love, creative freedom, no dress codes, & a flat structure
        </h1>
        <p>...just a few perks of being part of the Street2Site family.</p>
      </div>
      <div className="companyculture6 companyculturebox">
        <h1>Culture is our cornerstone</h1>
        <p>
          <s>Compromising culture for profit? No way.</s>
        </p>
        <p>
          <s>Overworking our team? Not a chance.</s>
        </p>
        <p>
          <s>Rigid hierarchies? We prefer collaboration.</s>
        </p>
        <p>
          <s>Client is always right? We believe in partnership.</s>
        </p>
      </div>
    </div>
  );
};

export default Company_culture;
