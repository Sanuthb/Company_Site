import React from 'react'
import './Service_page_comp.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Service_landing_card = () => {

    useGSAP(()=>{

        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'.Service_landing_card',
                start:"center center",
                end:"center center",
                markers:false,
                scrub:4,
            }
        })

        tl.to(".letters",{
            scale:10,
            duration:1.5,
            ease:"power2.inOut",
            stagger:{
                amount:0.1
            },
            opacity:0
        })
    })



  return (
    <div className='Service_landing_card'>
      <div className="letters">
        <h1>T</h1>
        <h1>A</h1>
        <h1>S</h1>
        <h1>K</h1>
      </div>
      <div className="letters">
        <h1>F</h1>
        <h1>O</h1>
        <h1>R</h1>
        <h1>G</h1>
        <h1>E</h1>
      </div>

    </div>
  )
}

export default Service_landing_card
