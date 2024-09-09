import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Company_culture.css";

const Company_culture = () => {
  gsap.registerPlugin(ScrollTrigger);

  const comapny_culture=useRef(null)
  const companyculture1=useRef(null)
  const companyculture2=useRef(null)
  const companyculture3=useRef(null)
  const companyculture4=useRef(null)
  const companyculture5=useRef(null)
  const companyculture6=useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: comapny_culture.current,
        scroller: "body",
        markers: false,
        start: "60% center",
        end: "bottom bottom",
        scrub: 3,
      },
    });

    timeline
      .fromTo(
        companyculture1.current,
        { x: "-100%"},
        { x: "0%", duration: 0.5 },
        "same_time"
      )
      .fromTo(
        companyculture2.current,
        { x: "100%"},
        { x: "0%", duration: 0.5 },
        "same_time"
      )
      .fromTo(
        companyculture3.current,
        { x: "-200%" },
        { x: "0%", duration: 0.5 },
        "same_time1"
      )
      .fromTo(
        companyculture4.current,
        { x: "200%" },
        { x: "0%", duration: 0.5 },
        "same_time1"
      )
      .fromTo(
        companyculture5.current,
        { x: "-200%" },
        { x: "0%", duration: 0.5 },
        "same_time2"
      )
      .fromTo(
        companyculture6.current,
        { x: "200%" },
        { x: "0%", duration: 0.5 },
        "same_time2"
      );
  });

  return (
    <div className="Company_culture" ref={comapny_culture}>
      <div className="companyculture1 companyculturebox" ref={companyculture1}>
        <h1>We didn’t just create websites; we crafted experiences.</h1>
        <p>The secret to a great digital presence? A team that cares.</p>
      </div>
      <div className="companyculture2 companyculturebox" ref={companyculture2}>
        <h1>3</h1>
        <p>
          That’s how many unique perspectives we bring together, each one
          enriched by a different cultural background.
        </p>
      </div>
      <div className="companyculture3 companyculturebox" ref={companyculture3}>
        <h1>100% Remote</h1>
        <p>We’re wherever you are (as long as there’s Wi-Fi).</p>
      </div>
      <div className="companyculture4 companyculturebox" ref={companyculture4}>
        <h1>6 Client Challenges</h1>
        <p>
          We listened, we solved, but only 2 saw our potential and hired
          us—proof that we’re selective about who we partner with.
        </p>
      </div>
      <div className="companyculture5 companyculturebox" ref={companyculture5}>
        <h1>
          Client love, creative freedom, no dress codes, & a flat structure
        </h1>
        <p>...just a few perks of being part of the Street2Site family.</p>
      </div>
      <div className="companyculture6 companyculturebox" ref={companyculture6}>
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
