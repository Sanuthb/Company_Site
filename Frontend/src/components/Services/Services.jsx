import React from 'react'
import './Services.css'
import path from '../../assets/path1.png';
import Uitoggle from '../UI_components/Uitoggle';
import Uibutton from "../UI_components/uibutton";
import Uicalander from '../UI_components/Uicalander';

const Services = () => {
  return (
    <section className="Services">
      <div className="service">
        <div className="box1">
          <div className="service1">
            <div className="uicontent">
              <div className="title">
                <p>INTERFACE DESIGN</p>
              </div>
              <div className="heading">
                <h2>UI/UX Design</h2>
              </div>
              <div className="uibutton">
                <Uibutton />
              </div>
              <div className="uidesign">
                <div className="uicalander">
                  <Uicalander
                    backgroundColor="#ffff"
                    color="black"
                    data={{ date: "17", month: "NOV" }}
                  />
                  <Uicalander
                    backgroundColor="#ff3979"
                    color="white"
                    data={{ date: "20", month: "DEC" }}
                  />
                </div>
                <div className="uitoggle">
                  <Uitoggle />
                </div>
              </div>
            </div>
            <div className="uiimage">
              <img src={path} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="service2"></div>
          <div className="service3"></div>
        </div>
        <div className="box1">
          <div className="service4"></div>
        </div>
      </div>
    </section>
  );
}

export default Services
