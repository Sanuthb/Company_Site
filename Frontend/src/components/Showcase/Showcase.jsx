import React, { useEffect, useState } from "react";
import "./Showcase.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Image imports (add more as needed)
import website1 from "../../assets/showcase/website1.jpg";
import website2 from "../../assets/showcase/website2.jpg";
import website3 from "../../assets/showcase/website3.jpg";
import website4 from "../../assets/showcase/website4.jpg";
import website5 from "../../assets/showcase/website5.jpg";
import { Link } from "react-router-dom";
// import website6 from "../../assets/showcase/website6.jpg";

const Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setslidesToShow] = useState(3);

  const slides = [
    { img: website1 },
    { img: website5 },
    { img: website2 },
    { img: website3 },
    { img: website4 },
  ];

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width <= 480) setslidesToShow(2);     
      
      else if (width <= 768) setslidesToShow(3);
      
      else setslidesToShow(3);                 
      
    };
  
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxSlide = slides.length - slidesToShow;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <div className="showcase-container">
      <h2 className="showcase_heading">
        See what businesses are building with{" "}
        <span className="brand-name">Street2Site</span>.
      </h2>
      <div className="sliderbutton">
        <button onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="slider">
        <Link
          to="/work"
          className="slider-track"
          style={{
            transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)`,
            width: `${(slides.length * 100) / slidesToShow}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.img} alt={`Slide ${index}`} />
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
