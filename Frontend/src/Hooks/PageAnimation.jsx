import { useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import "./PageAnimation.css";  

const PageAnimation = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".overlap",
      { scale: 0, borderRadius: "50vw" }, 
      { 
        scale: 1, 
        borderRadius: "50vw", 
        duration: 0.6, 
        ease: "power1.inOut",
      }
    )
    .fromTo(".logo_animation",{
      scale: 0,
    },{
      scale: 1,
      duration: 0.5
    })
    .to(".logo_animation",{
      scale: 0,
      duration: 0.3,
    })
    .to(".overlap", {
      scale: 0, 
      borderRadius: "50vw", 
      duration: 0.5,
      ease: "power1.inOut",
      delay: 0.1, 
    })
    .fromTo(
      ".childprop", 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, delay: 0.1 } 
    );
    
  }, [pathname]); 

  return (
    <>
      <div className="overlap">
        <div className="logo_animation">
          <img src={logo} alt="street2site" className="logo_image" />
          <h1 className="logo_text">STREET2SITE</h1>
        </div>
      </div>
      <div className="childprop">{children}</div>
    </>
  );
};

export default PageAnimation;
