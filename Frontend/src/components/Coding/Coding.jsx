import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CodingDescription from "../UI_components/CodingDescription";
import CodingTitle from "../UI_components/CodingTitle";
import styles from "./Coding.module.css";

gsap.registerPlugin(ScrollTrigger);

const Coding = () => {
  const codingSections = {
    frontend: {
      title: { subheading: "Unique", heading: "FRONTEND" },
      description: {
        images: ["html", "css", "js", "reactjs", "nextjs", "tailwind"],
        description:
          "Crafty way of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.",
      },
    },
    backend: {
      title: { subheading: "Secure", heading: "BACKEND" },
      description: {
        images: ["php", "nodejs", "expressjs", "django"],
        description:
          "Server side development focusing primarily on databases, backend logic, APIs, and Servers for efficient storage and arranging of data.",
      },
    },
    database: {
      title: { subheading: "Storage", heading: "DATABASE" },
      description: {
        images: ["sql", "mongodb"],
        description:
          "Explore our comprehensive database solutions, featuring diverse options for efficient data storage and management. Find the ideal database solution to drive your projects forward.",
      },
    },
    CMS: {
      title: { subheading: "Niche Focused", heading: "CMS ORIENTED" },
      description: {
        images: ["wordpress", "wix", "webflow"],
        description:
          "Designing websites for a particular NICHE/INDUSTRY with strong emphasis on Strategized Research, Competitors Matrices, Growth Prospects and User oriented results to be displayed.",
      },
    },
  };

  const descriptionRefs = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    Object.keys(codingSections).forEach((key, index) => {
      gsap.fromTo(
        descriptionRefs.current[index],
        {
          x: "25%",
        },
        {
          x: "5%",
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: descriptionRefs.current[index],
            start: "top bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        titleRefs.current[index],
        {
          x: "35%",
        },
        {
          x: "55%",
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: titleRefs.current[index],
            start: "top bottom",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.main}>
      {Object.keys(codingSections).map((key, index) => (
        <div className={styles.container} key={key}>
          <div
            ref={(el) => {
              descriptionRefs.current[index] = el;
            }}
          >
            <CodingDescription description={codingSections[key].description} />
          </div>
          <div ref={(el) => (titleRefs.current[index] = el)}>
            <CodingTitle title={codingSections[key].title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coding;
