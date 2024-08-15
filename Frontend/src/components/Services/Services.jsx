import React from "react";
import path from "../../assets/path1.png";
import Uitoggle from "../UI_components/Uitoggle";
import Uibutton from "../UI_components/Uibutton";
import Uicalander from "../UI_components/Uicalander";
import Windownavbar from "../UI_components/Windownavbar";
import serviceimg2 from "../../assets/serviceimg2.png";
import serviceimg3 from "../../assets/serviceimg3.png";
import serviceimg1 from "../../assets/serviceimg1.png";
import serviceimg4 from "../../assets/serviceimg4.png";
import serviceimg5 from "../../assets/serviceimg5.png";
import ourServices from "../../assets/splash.svg";
import styles from "./Services.module.css";

const KishanServices = () => {
  const now = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <section className={styles.Services}>
      <div className={styles.Service}>
        <div className={styles.service1}>
          <div className={styles.uicontent}>
            <div className={styles.title}>
              <p>INTERFACE DESIGN</p>
            </div>
            <div className={styles.heading}>
              <h2>UI/UX Design</h2>
            </div>
            <div className={styles.uibutton}>
              <Uibutton />
            </div>
            <div className={styles.uidesign}>
              <div className={styles.uicalander}>
                <Uicalander
                  backgroundColor="#ffff"
                  color="black"
                  data={{
                    date: now.getDate(),
                    month: monthNames[now.getMonth()],
                  }}
                />
                <Uicalander
                  backgroundColor="#ff3979"
                  color="white"
                  data={{
                    date: now.getDate() + 18,
                    month: monthNames[now.getMonth() + 3],
                  }}
                />
              </div>
              <div className={styles.uitoggle}>
                <Uitoggle />
              </div>
            </div>
          </div>
          <div className={styles.uiimage}>
            <img src={path} alt="" />
          </div>
        </div>

        <div className={styles.service2}>
          <div className={styles.windowhead}>
            <div className={styles.red}></div>
            <div className={styles.yellow}></div>
            <div className={styles.green}></div>
          </div>
          <div className={styles.windowbody}>
            <div className={styles.windownavbar}>
              <Windownavbar />
            </div>
            <h2>Website Design & Development</h2>
            <div className={styles.wave1}></div>
            <div className={styles.wave2}>
              <h2>Aa</h2>
            </div>
            <div className={styles.tag}>&lt;/&gt;</div>
          </div>
        </div>

        <div className={styles.service3}>
          <h2>Digital Marketing</h2>
        </div>

        <div className={styles.service4}>
          <div className={styles.service4heading}>
            <h2>Success</h2>
            <h2>Solutions</h2>
          </div>
          <img src={serviceimg1} alt="" className={styles.serviceimg1} />
          <img src={serviceimg2} alt="" className={styles.serviceimg2} />
          <img src={serviceimg2} alt="" className={styles.serviceimg3} />
          <img src={serviceimg4} alt="" className={styles.serviceimg4} />
          <img src={serviceimg3} alt="" className={styles.serviceimg5} />
          <img src={serviceimg5} alt="" className={styles.serviceimg6} />
        </div>

        <div className={styles.ourservices}>
          <h2>
            Our <br />
            Services
          </h2>
          <img src={ourServices} alt="" />
        </div>
        <div className={styles.learnmore_btn}>
          <h2>LEARN MORE</h2>
        </div>
      </div>

      {/* <div className={styles.ourservicescontainer}>
        <div className={styles.ourservices}>
          <h2>Our <br />Services</h2>
          <img src={ourServices} alt="" />
        </div>
      </div> */}
    </section>
  );
};

export default KishanServices;
