import React, { useRef } from 'react'
import './About.css'
import Image_trail from '../Image_trail/Image_trail';
import img1 from "../../assets/about_img_trils/img1.jpg";
import img2 from '../../assets/about_img_trils/img2.jpg'
import img3 from "../../assets/about_img_trils/img3.jpg";

const About = () => {

  const images = [
      img1,img2,img3
  ]

  const aboutref=useRef(null)
  return (
    <section ref={aboutref} className="About" data-scroll data-scroll-section>
      <Image_trail images={images} section={".About"} />
      <div>
        <h1>THE</h1>
      </div>
      <div>
        <h1 className="highlight">SECRET</h1>
      </div>
      <div>
        <h1>FOR YOUR SUCESS</h1>
      </div>
      <div className="paragrph">
        <p>
          At Street2Site, we turn challenges into opportunities with our
          innovative UI/UX solutions. Let us solve your problems and elevate
          your business to new heights!
        </p>
      </div>
    </section>
  );
}

export default About
