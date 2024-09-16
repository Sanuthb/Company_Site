import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const about_page_animation = (
  section,
  about_top_container,
  about_bottom_container,
  dummy_box,
  about_company_story,
  about_image,
  about_image_img,
  about_top_container_h1,
) => {
  useGSAP(() => {
    const mobile_screen = gsap.matchMedia();

    mobile_screen.add("(min-width:767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "top -100%",
          scrub: 1,
          pin: true,
          markers: false,
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
      tl.fromTo(
        dummy_box,
        {
          y: "200%",
          opacity: 0,
        },
        {
          y: "-100%",
          opacity: 1,
          duration: 2,
        },
        "start+=0.5"
      );

      tl.fromTo(
        about_company_story,
        {
          y: "200%",
          opacity: 0,
        },
        {
          y: "-50%",
          opacity: 1,
          duration: 2,
        },
        "start+=1"
      );

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: about_image,
          start: "400% 0%",
          end: "bottom bottom",
          scrub: 1,
          markers: false,
        },
      });

      t2.to(about_image_img, {
        scale: 3,
        duration: 1,
        borderRadius: 5,
      });
    });
  });
};

export default about_page_animation;
