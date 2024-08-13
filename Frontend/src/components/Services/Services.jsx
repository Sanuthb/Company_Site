import React from 'react'
import './Services.css'
import path from '../../assets/path1.png';
import Uitoggle from '../UI_components/Uitoggle';
import Uibutton from "../UI_components/Uibutton";
import Uicalander from '../UI_components/Uicalander';
import Windownavbar from '../UI_components/Windownavbar';
import serviceimg2 from "../../assets/serviceimg2.png";
import serviceimg3 from "../../assets/serviceimg3.png";
import serviceimg1 from "../../assets/serviceimg1.png";
import serviceimg4 from "../../assets/serviceimg4.png";
import serviceimg5 from "../../assets/serviceimg5.png";

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
          <div className="service2">
            <div className="windowhead">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="windowbody">
              <div className="windownavbar">
                <Windownavbar />
              </div>
              <h2>Website Design & Development</h2>
              <div className="wave1"></div>
              <div className="wave2">
                <h2>Aa</h2>
              </div>
              <div className="tag">&lt;/&gt;</div>
            </div>
          </div>
          <div className="service3">
            <h2>Digital Marketing</h2>
          </div>
        </div>
        <div className="box1">
          <div className="box2">
            <div className="service_title">
              <h2>OUR SERVICES</h2>
            </div>
            <div className="service4">
              <div className="service4heading">
                <h2>Success</h2>
                <h2>Solutions</h2>
              </div>
              <img src={serviceimg1} alt="" className="serviceimg1" />
              <img src={serviceimg2} alt="" className="serviceimg2" />
              <img src={serviceimg2} alt="" className="serviceimg3" />
              <img src={serviceimg4} alt="" className="serviceimg4" />
              <img src={serviceimg3} alt="" className="serviceimg5" />
              <img src={serviceimg5} alt="" className="serviceimg6" />
            </div>
          </div>
          <div className="learnmore_btn">
            <h2>LEARN MORE</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services
