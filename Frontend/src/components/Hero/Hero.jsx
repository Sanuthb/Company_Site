import React from 'react'
import './Hero.css'
import Helper from './Helper'

const Hero = () => {

  const { position, startdragging } = Helper({ box1: {x:100,y:100}, box2: {x:400,y:100} })

  return (
    <div className="hero">
      <div
        onMouseDown={(e) => startdragging("box1", e)}
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: position.box1.y,
          left: position.box1.x,
          cursor: "grab",
        }}
      >
        Drag Me
      </div>
      <div
        onMouseDown={(e) => startdragging("box2", e)}
        style={{
          backgroundColor: "blue",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: position.box2.y,
          left: position.box2.x,
          cursor: "grab",
        }}
      >
        Drag Me
      </div>
    </div>
  );
}

export default Hero
