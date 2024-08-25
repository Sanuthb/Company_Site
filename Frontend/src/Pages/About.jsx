import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About_landing from "../components/About_page_comp/About_landing/About_landing";
import about_office from "../assets/about_office.jpg";
import Company_culture from "../components/About_page_comp/Company_culture/Company_culture";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    
    gsap.from(".about_text_para h5", {
      duration: 1,
      opacity: 0,
      y: "20%",
      scrollTrigger: {
        trigger: ".about_text_para",
        scroller: "body",
        start: "top 10%",
        end: "bottom 100%",
        markers: false,
        scrub: 2,
      },
    });
        gsap.from(".about_text_para p", {
          duration: 1,
          opacity: 0,
          delay: 1,
          y: "20%",
          scrollTrigger: {
            trigger: ".about_text_para",
            scroller: "body",
            start: "top 10%",
            end: "bottom 100%",
            markers: false,
            scrub: 2,
          },
        });
     gsap.from(".about_image", {
       duration: 1.5,
       width: "30%",
        height:"30vh",
       scrollTrigger: {
         trigger: ".about_image",
         scroller: "body",
         start: "top 10%",
         end: "bottom 100%",
         markers: false,
         scrub: 2,
       },
     });


  })

  return (
    <main>
      <Navbar />
      <About_landing />
      <div
        className="about_text_para"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2vw",
        }}
      >
        <h5 style={{ fontSize: "2rem" }}>Shaping the digital world,</h5>
        <p style={{ fontSize: "1.3rem" }}>enjoying every step.</p>
      </div>
      <div style={{ padding: "3vw" }}>
        <div className="about_image" style={{ width: "100%", height: "100vh" }}>
          <img
            src={about_office}
            alt="about_office"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
        </div>
      </div>
      <div>
        <Company_culture />
      </div>
    </main>
  );
};

export default About;
