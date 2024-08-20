import React from 'react'
import './Hero.css'
import Hero_icons from '../Hero_components/Hero_icons';

const Hero = () => {
  return (
    <div class="hero">
      <div class="hero_content">
        <h1>
          Empower
          <div class="hero_black_box1">
            <div class="hero_black_box_icons">
              <div class="hero_icon">
                <Hero_icons rotate={"rotate(55deg)"} />
              </div>
              <div class="hero_icon">
                <Hero_icons rotate={"rotate(-65deg)"} />
              </div>
              <div class="hero_icon">
                <Hero_icons rotate={"rotate(95deg)"} />
              </div>
            </div>
          </div>
        </h1>
        <h1>
          <div class="hero_icon" >
            <Hero_icons
              rotate={"rotate(-15deg)"}
            />
          </div>
          your online
          <div class="hero_icon">
            <Hero_icons rotate={"rotate(35deg)"} />
          </div>
        </h1>
        <h1>
          <div class="hero_black_box2">
            <div
              class="hero_black_box_icons"
              style={{ top: "110%", left: "18%", transform: "rotate(45deg)" }}
            >
              <div class="hero_icon">
                <Hero_icons rotate={"rotate(90deg)"} />
              </div>
              <div class="hero_icon">
                <Hero_icons rotate={"rotate(-65deg)"} />
              </div>
              <div class="hero_icon">
                <Hero_icons rotate={"rotate(55deg)"} />
              </div>
            </div>
          </div>
          presence
        </h1>
      </div>
    </div>
  );
}

export default Hero
