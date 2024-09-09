import React, { useEffect, useRef, useState } from "react";

import path from "../../assets/path1.png";
import Uitoggle from "../UI_components/Uitoggle";
import Uibutton from "../UI_components/Uibutton";
import Uicalander from "../UI_components/Uicalander";
import Windownavbar from "../UI_components/Windownavbar";
import serviceimg2 from "../../assets/serviceimg2.png";
import serviceimg3 from "../../assets/serviceimg3.png";
import serviceimg1 from "../../assets/serviceimg1.png";
import serviceimg4 from "../../assets/serviceimg4.png";
import serviceimg5 from "../../assets/serviceimg5.png";
import ourServices from "../../assets/splash.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Pin.module.css";

// Import your components and assets here

gsap.registerPlugin(ScrollTrigger);

const ServiceGallery = () => {
  const galleryRef = useRef(null);
  const detailsRef = useRef([]);
  const photosRef = useRef([]);

  const now = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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
          markers: true,
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
      console.log(`Active section: ${activeSection}`);
      switch (activeSection) {
        case 0:
          galleryRef.current.style.backgroundColor = "#fae1ee";
          break;
        case 1:
          galleryRef.current.style.backgroundColor = "#e0f0ff";
          break;
        case 2:
          galleryRef.current.style.backgroundColor = "#ffede0";
          break;
        case 3:
          galleryRef.current.style.backgroundColor = "#d3d6f0";
          break;
        default:
          galleryRef.current.style.backgroundColor = "#ffeae0"; // Default color if no section is active
          break;
      }
    }
  }, [activeSection]);

  return (
    <div ref={galleryRef} className={styles.gallery}>
      <div className={styles.left}>
        <div className={styles.desktopContent}>
          {[
            {
              heading: "UI/UX Design",
              paragraph: "Interface Design, User Experience, Creative Layouts",
            },
            {
              heading: "Web Design & Development",
              paragraph: "Web Creation, Online Presence, Development Skills",
            },
            {
              heading: "Digital Marketing",
              paragraph:
                "SEO Strategies, Online Advertising, Content Promotion",
            },
            {
              heading: "Success Solutions",
              paragraph:
                "Winning Methods, Growth Strategies, Achievement Plans",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={styles.desktopContentSection}
              ref={(el) => (detailsRef.current[index] = el)}
            >
              <div className={styles.desktopContentContainer}>
                <h1>{service.heading}</h1>
                <p>{service.paragraph}</p>
                <button>Enquire Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.desktopPhotos}>
          <div
            className={`${styles.desktopPhoto} ${styles.service1}`}
            ref={(el) => (photosRef.current[0] = el)}
          >
            <div className={styles.uicontent}>
              <div className={styles.title}>
                <p>INTERFACE DESIGN</p>
              </div>
              <div className={styles.heading}>
                <h2>UI/UX Design</h2>
              </div>
              <div className={styles.uibutton}>
                <Uibutton />
              </div>
              <div className={styles.uidesign}>
                <div className={styles.uicalander}>
                  <Uicalander
                    backgroundColor="#ffff"
                    color="black"
                    data={{
                      date: now.getDate(),
                      month: monthNames[now.getMonth()],
                    }}
                  />
                  <Uicalander
                    backgroundColor="#ff3979"
                    color="white"
                    data={{
                      date: now.getDate() + 18,
                      month: monthNames[now.getMonth() + 3],
                    }}
                  />
                </div>
                <div className={styles.uitoggle}>
                  <Uitoggle />
                </div>
              </div>
            </div>
            <div className={styles.uiimage}>
              <img src={path} alt="" />
            </div>
          </div>
          <div
            className={`${styles.desktopPhoto} ${styles.service2}`}
            ref={(el) => (photosRef.current[1] = el)}
          >
            <div className={styles.windowhead}>
              <div className={styles.red}></div>
              <div className={styles.yellow}></div>
              <div className={styles.green}></div>
            </div>
            <div className={styles.windowbody}>
              <div className={styles.windownavbar}>
                <Windownavbar />
              </div>
              <h2>Website Design & Development</h2>
              <div className={styles.wave1}></div>
              <div className={styles.wave2}>
                <h2>Aa</h2>
              </div>
              <div className={styles.tag}>&lt;/&gt;</div>
            </div>
          </div>
          <div
            className={`${styles.desktopPhoto} ${styles.service3}`}
            ref={(el) => (photosRef.current[2] = el)}
          >
            <h2>Digital Marketing</h2>
          </div>
          <div
            className={`${styles.desktopPhoto} ${styles.service4}`}
            ref={(el) => (photosRef.current[3] = el)}
          >
            <div className={styles.service4heading}>
              <h2>Success</h2>
              <h2>Solutions</h2>
            </div>
            <img src={serviceimg1} alt="" className={styles.serviceimg1} />
            <img src={serviceimg2} alt="" className={styles.serviceimg2} />
            <img src={serviceimg2} alt="" className={styles.serviceimg3} />
            <img src={serviceimg4} alt="" className={styles.serviceimg4} />
            <img src={serviceimg3} alt="" className={styles.serviceimg5} />
            <img src={serviceimg5} alt="" className={styles.serviceimg6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
