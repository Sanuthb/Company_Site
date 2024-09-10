import { useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const PageAnimation = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".overlap",
      {  scale:0,borderRadius: "50vw" }, 
      { 
        scale: 1, 
        borderRadius: "50vw", 
        duration: 0.6, 
        ease: "power1.inOut",
      }
    )
    .fromTo(".logo_animation",{
      scale:0,
    },{
      scale:1,
      duration:0.5
    })
    .to(".logo_animation",{
      scale:0,
      duration:0.3,
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
      <div
        className="overlap"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "var(--clr--primary-orange)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none", 
          borderRadius:"10vw"
        }}
      >
        <div
        className="logo_animation"
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            padding: "2vw",
            borderRadius: "10vw",
          }}
        >
          <img src={logo} alt="street2site" style={{ width: "200px" }} />
          <h1 style={{ fontSize: "5vw" }}>STREET2SITE</h1>
        </div>
      </div>
      <div className="childprop">{children}</div>
    </>
  );
};

export default PageAnimation;
