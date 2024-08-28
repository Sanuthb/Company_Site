import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const about_page_animation = (
  section,
  about_top_container,
  about_bottom_container,
  dummy_box,
  about_company_story,
  about_text_para,
  about_image,
  our_culture
) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "top -100%",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    tl.to(
      about_top_container,
      {
        top: "-100%",
        duration: 1.5,
      },
      "start"
    );
    tl.to(
      about_bottom_container,
      {
        top: "100%",
        duration: 1.5,
      },
      "start"
    );
    //   tl.fromTo(
    //     dummy_box,
    //     {
    //       y: "200%",
    //       opacity: 0,
    //     },
    //     {
    //       y:"-100%",
    //       opacity: 1,
    //       duration: 2,
    //     },
    //     "start+=0.5"
    //   );

    //   tl.fromTo(
    //     about_company_story,
    //     {
    //       y: "200%",
    //       opacity: 0,
    //     },
    //     {
    //       y: "-100%",
    //       opacity: 1,
    //       duration: 2,
    //     },
    //     "start+=1"
    //   );

    //   tl.fromTo(
    //     about_text_para,
    //     {
    //       y: "200%",
    //       opacity: 0,
    //     },
    //     {
    //       y: "-100%",
    //       opacity: 1,
    //       duration: 2,
    //     },
    //     "start+=1.5"
    //   );

    //   tl.fromTo(
    //     about_image,
    //     {
    //       scale: 0.8,
    //       opacity: 0,
    //     },
    //     {
    //       scale: 1,
    //       opacity: 1,
    //       duration: 2.5,
    //     },
    //     "start+=2"
    //   );

    //   tl.fromTo(
    //     our_culture,
    //     {
    //       opacity: 0,
    //       y: 50,
    //     },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       duration: 2.5,
    //     },
    //     "start+=2.5"
    //   );
    // });
  })
};

export default about_page_animation;
