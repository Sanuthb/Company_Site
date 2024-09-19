import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Pin.module.css";

gsap.registerPlugin(ScrollTrigger);

const ServiceGallery = () => {
  const galleryRef = useRef(null);
  const detailsRef = useRef([]);
  const photosRef = useRef([]);
  const desktopPhotos = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const details = detailsRef.current.slice(1);
    const photos = photosRef.current.slice(1);

    gsap.set(photos, { yPercent: 101 });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: `.${styles.right}`,
        pinSpacing: false,
        markers: false,
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
          markers: false,
          onEnter: () => gsap.to(photos[index], { yPercent: 0, duration: 1 }),
          onLeaveBack: () =>
            gsap.to(photos[index], { yPercent: 101, duration: 1 }),
        });
      });
    });

    const handleScroll = () => {
      const sections = detailsRef.current;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const { top, bottom } = section.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = bottom + window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeSection !== null) {
      switch (activeSection) {
        case 0:
          galleryRef.current.style.backgroundColor = "#9B59B6";
          desktopPhotos.current.style.boxShadow =
            "rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 8px 15px, rgba(255, 255, 255, 0.493)";

          break;
        case 1:
          galleryRef.current.style.backgroundColor = "#FF2D55";
          desktopPhotos.current.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 8px 15px, rgba(255, 255, 255, 0.493)";
          break;
        case 2:
          galleryRef.current.style.backgroundColor = "#FF851B";
          desktopPhotos.current.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 8px 15px, rgba(255, 255, 255, 0.493)";
          break;
        case 3:
          galleryRef.current.style.backgroundColor = "#F7CA18";
          desktopPhotos.current.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 8px 15px, rgba(255, 255, 255, 0.493)";
          break;
        default:
          galleryRef.current.style.backgroundColor = "black"; 
          desktopPhotos.current.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 8px 15px, rgba(255, 255, 255, 0.493)";
          break;
      }
    }
  }, [activeSection]);

  return (
    <>
    <div className={styles.serviceheading}><h1>Your Partner in Success</h1></div>
    <div ref={galleryRef} className={styles.gallery}>
      <div className={styles.left}>
        <div className={styles.desktopContent}>
          {[
            {
              heading: "UI/UX Design",
            },
            {
              heading: "Web Design & Development",
            },
            {
              heading: "SEO",
            },
            {
              heading: "Success Solutions",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={styles.desktopContentSection}
              ref={(el) => (detailsRef.current[index] = el)}
            >
              <div className={`${styles[`desktopContentSection${index + 1}`]}`}>
                <h1>{service.heading}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.desktopPhotos} ref={desktopPhotos}>
          <div
            className={`${styles.desktopPhoto} ${styles.service1}`}
            ref={(el) => (photosRef.current[0] = el)}
          >
            <h1>Interactive wireframes & prototypes</h1>{" "}
          </div>
          <div
            className={`${styles.desktopPhoto} ${styles.service2}`}
            ref={(el) => (photosRef.current[1] = el)}
          >
            <h1>Custom websites for your brand</h1>
          </div>
          <div
            className={`${styles.desktopPhoto} ${styles.service3}`}
            ref={(el) => (photosRef.current[2] = el)}
          >
            <h1>Rank Higher, Grow Faster</h1>{" "}
          </div>
          <div
            className={`${styles.desktopPhoto} ${styles.service4}`}
            ref={(el) => (photosRef.current[3] = el)}
          >
            <h1>Tailored success strategies for growth</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceGallery;
