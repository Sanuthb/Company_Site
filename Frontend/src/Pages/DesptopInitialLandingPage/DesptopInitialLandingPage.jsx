import React, { useState } from "react";
import useDraggable from "../../Hooks/useDraggable";
import Toolnavbar from "../../components/DesktopdragComp/Toolnavbar";
import Backgroundcolor from "../../components/DesktopdragComp/Backgroundcolor";
import image from "../../assets/img.png";
import { useNavigate } from "react-router-dom";
import "./DesptopInitialLandingPage.css";
import logo from '../../assets/logo.png';
import { LiaDesktopSolid } from "react-icons/lia";
import { FaMobileAlt } from "react-icons/fa";
import { LuCornerUpLeft } from "react-icons/lu";
import { CiCircleMinus } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

// Custom Hook to get window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const DesptopInitialLandingPage = () => {
  const [backgroundcolor, setbackgroundcolor] = useState("white");
  const [Textcolor, setTextcolor] = useState("");
  const [Buttoncolor, setButtoncolor] = useState("");

  const canvasWidth = 1000;
  const canvasHeight = 500;

  const { positions, startDragging } = useDraggable(
    ["nav", "text", "paragraph", "button", "image"],
    canvasWidth,
    canvasHeight
  );

  const navigate = useNavigate();
  const { width } = useWindowSize();

  const handlePublishClick = () => {
    navigate("/home"); 
  };

  if (width <= 768) {
    return null; 
  }

  return (
    <main className="DesptopInitialLandingPage">
      {/* navbar */}
      <div className="DesptopInitialLandingPagenavbar">
        <div>
          <img src={logo} alt="street2site" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Templates</a>
            </li>
            <li>
              <a href="#">Trash</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="savebtn">Save</button>
          <button className="previewbtn">Preview</button>
          <button onClick={handlePublishClick}>Publish</button>
        </div>
      </div>
      <div className="DesptopInitialLandingPage-additionalbar">
        <div className="DesptopInitialLandingPage-additionalbar-tool">
          <div className="DesptopInitialLandingPage-additionalbar-tool-container1">
            <label>Page:</label>
            <select name="" id="">
              <option value="">Home</option>
              <option value="">Service</option>
              <option value="">Project</option>
            </select>
          </div>
          <div className="DesptopInitialLandingPage-additionalbar-tool-container2">
            <div className="desktopicon">
              <LiaDesktopSolid />
            </div>
            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(90, 89, 89, 0.356)",
              }}
            ></div>
            <div className="mobileicon">
              <FaMobileAlt />
            </div>
          </div>
        </div>
        <div className="DesptopInitialLandingPage-additionalbar-tool">
          <div className="left-right-icon">
            <div className="lefticon">
              <LuCornerUpLeft />
            </div>
            <div className="righticon">
              <LuCornerUpLeft />
            </div>
          </div>
          <div className="CircleMinus">
            <CiCircleMinus /> 100%
          </div>
          <div className="tools">
            <FiLayout /> Tools
          </div>
          <div className="Search">
            <CiSearch />
            <input type="text" placeholder="Search.." />
          </div>
        </div>
      </div>
      <div className="DesptopInitialLandingPage-heading">
        <h4>
          Your Website, Your Way! Arrange Components with Drag-and-Drop
          Simplicity. Click 'Publish' to See It Shine!
        </h4>
      </div>
      <div className="DesptopInitialLandingPagehero">
        <div>
          <Toolnavbar />
        </div>
        <div
          className="canva"
          style={{
            backgroundColor: backgroundcolor,
            width: canvasWidth,
            height: canvasHeight,
            position: "relative",
          }}
        >
          <div
            className="canva-content DesptopInitialLandingPagenavbar"
            style={{
              left: positions["nav"]?.x || 0,
              top: positions["nav"]?.y || 0,
              position: "absolute",
            }}
            onMouseDown={(e) => startDragging("nav", e)}
          >
            <h2>Street2Site</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div
            className="canva-content"
            style={{
              left: positions["text"]?.x || 0,
              top: positions["text"]?.y || 0,
              position: "absolute",
            }}
            onMouseDown={(e) => startDragging("text", e)}
          >
            <h2 style={{ color: Textcolor }}>Here we work for your success</h2>
          </div>

          <div
            className="canva-content"
            style={{
              left: positions["paragraph"]?.x || 0,
              top: positions["paragraph"]?.y || 0,
              position: "absolute",
            }}
            onMouseDown={(e) => startDragging("paragraph", e)}
          >
            <p style={{ color: Textcolor }}>
              Street2Site is a creative and innovative digital agency that
              specializes in transforming your business into a beautiful,
              user-friendly, and engaging online space.
            </p>
          </div>

          <div
            className="canva-content"
            style={{
              left: positions["button"]?.x || 0,
              top: positions["button"]?.y || 0,
              position: "absolute",
            }}
            onMouseDown={(e) => startDragging("button", e)}
          >
            <button style={{ backgroundColor: Buttoncolor }}>
              Get started
            </button>
          </div>

          <div
            className="canva-content-image"
            style={{
              left: positions["image"]?.x || 0,
              top: positions["image"]?.y || 0,
              position: "absolute",
            }}
            onMouseDown={(e) => startDragging("image", e)}
          >
            <img src={image} alt="image" />
          </div>
        </div>
        <div>
          <Backgroundcolor
            setbackgroundcolor={setbackgroundcolor}
            setTextcolor={setTextcolor}
            setButtoncolor={setButtoncolor}
          />
        </div>
      </div>
    </main>
  );
};

export default DesptopInitialLandingPage;
