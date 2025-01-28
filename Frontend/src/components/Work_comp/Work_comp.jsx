import React from 'react';
import './Work_comp.css';
import img1 from '../../assets/works/w2.jpg'
import img2 from '../../assets/works/w3.jpg'
import img3 from '../../assets/works/w4.jpg'
import img6 from '../../assets/works/w1.jpg'
import { motion } from 'framer-motion'
import { useSetRecoilState } from "recoil";
import { Enquiry_popup_tigger } from "../../Atoms/Enquiry_atom/Enquiry_atom";
import Enquire_popup from '../Enquire_popup/Enquire_popup';

export const items = [
  {
    id: "1",
    title: "BookMyTowing",
    description:
      "Street2Site transformed BookMyTowing's outdated website into a modern, user-friendly platform. We enhanced navigation, implemented responsive design, and streamlined the booking process, allowing users to request towing assistance effortlessly. This transformation improved their online presence, reflecting their commitment to reliability and significantly boosting user engagement.",
    image: img1,
  },
  {
    id: "2",
    title: "Tejas Digital Studio",
    description:
      "Tejas Digital Studio revitalized BookMyTowing’s online presence with a sleek, user-focused website redesign. We upgraded navigation, added responsive design elements, and optimized the booking process, making it easy for customers to request towing services with just a few clicks. This overhaul reinforced their brand's reliability and significantly increased user engagement, reflecting their dedication to superior service.",
    image: img2,
  },
  {
    id: "3",
    title: "Microcomonline",
    description:
      "Microcomonline White, a forward-thinking startup, entrusted us with the development of their website, tailored specifically for their international clientele. We focused on creating an innovative online platform that caters to diverse global needs, ensuring seamless interactions and high-quality service. Our commitment to excellence in this project has positioned us as a reliable partner in the international market, driving engagement and fostering long-term relationships with clients worldwide.",
    image: img3,
  },
  {
    id: "4",
    title: "Fruit Bite",
    description:
      "Fruit Bite is a vibrant e-commerce platform dedicated to delivering fresh, organic fruits directly to customers’ doorsteps. We designed and developed a visually appealing and highly functional website, focusing on ease of navigation, secure payment options, and a seamless shopping experience. This project emphasized sustainability and health, reflecting the brand’s mission while significantly increasing online orders and customer satisfaction.",
    image: img6, 
  }
  
];

const WorkComp = () => {
   const setenquirytigger = useSetRecoilState(Enquiry_popup_tigger)
  return (
    <div className="work-comp">
      <h1 className="title">Our Projects</h1>
      <div className="card-container">
        {items.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.title} className="card-image" />
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
            <div className="card-buttons">
            <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onClick={()=>{setenquirytigger(true)}}
            className='btn'
          >
            Book Demo
          </motion.button>
            </div>
          </div>
        ))}
      </div>
      <Enquire_popup/>
    </div>
  );
};

export default WorkComp;
