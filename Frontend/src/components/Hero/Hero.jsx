import React from "react";
import "./Hero.css";
import Hero_icons from "../Hero_components/Hero_icons";
import { MdAutoGraph } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import { IoMegaphoneSharp } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import { motion } from "framer-motion";
import { createLoopAnimationVariants } from "../../Framer_Animation/Animation";
import Editornavbar from "../Editorcomponents/Editornavbar";
import Editor_sidebar from "../Editorcomponents/Editor_sidebar";
import Code_Editor from "../Editorcomponents/Code_Editor";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Hero = () => {
  return (
    <div class="hero">
      <div class="hero_content">
        <h1>
          Empower
          <div class="hero_black_box1">
            <div class="hero_black_box_icons">
              <motion.div
                class="hero_icon"
                variants={createLoopAnimationVariants(
                  [0, -5, 0, -5, 0],
                  [0, 0, 0, 0],
                  [0, 360, 0]
                )}
                initial="initial"
                animate="animate"
              >
                <Hero_icons
                  rotate={"rotate(50deg)"}
                  icons={<FaInstagram />}
                  color={"#DB005B"}
                />
              </motion.div>
              <motion.div
                class="hero_icon"
                variants={createLoopAnimationVariants(
                  [0, 0, 0, 0, 0],
                  [10, 0, 10, 0, 10]
                )}
                initial="initial"
                animate="animate"
              >
                <Hero_icons
                  rotate={"rotate(-65deg)"}
                  icons={<MdAutoGraph />}
                  color="#88D66C"
                />
              </motion.div>
              <motion.div
                class="hero_icon"
                variants={createLoopAnimationVariants(
                  [0, 10, 0, 10, 0],
                  [0, 0, 0, 0, 0]
                )}
                initial="initial"
                animate="animate"
              >
                <Hero_icons
                  rotate={"rotate(-120deg)"}
                  icons={<FaGears />}
                  color="#939185"
                />
              </motion.div>
            </div>
          </div>
        </h1>
        <h1>
          <motion.div
            class="hero_icon"
            style={{ marginRight: "6rem" }}
            variants={createLoopAnimationVariants(
              [0, 10, 0, 10, 0],
              [0, 0, 0, 0, 0]
            )}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(-15deg)"}
              icons={<TbBulb />}
              color="#F4CE14"
            />
          </motion.div>
          your online
          <motion.div
            class="hero_icon"
            style={{ marginLeft: "6rem" }}
            variants={createLoopAnimationVariants(
              [0, 10, 0, 10, 0],
              [0, 0, 0, 0, 0]
            )}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(-114deg)"}
              icons={<IoIosColorPalette />}
              color="#FF8343"
            />
          </motion.div>
        </h1>
        <h1>
          <div class="hero_black_box2">
            <div
              class="hero_black_box_icons"
              style={{
                top: "140%",
                left: "-120%",
                transform: "rotate(-45deg)",
              }}
            >
              <motion.div
                class="hero_icon"
                variants={createLoopAnimationVariants(
                  [0, 0, 0, 0, 0],
                  [10, 0, 10, 0, 10]
                )}
                initial="initial"
                animate="animate"
              >
                <Hero_icons
                  rotate={"rotate(90deg)"}
                  icons={<IoMegaphoneSharp />}
                  color="#4158A6"
                />
              </motion.div>
              <motion.div
                class="hero_icon"
                variants={createLoopAnimationVariants(
                  [0, 10, 0, 10, 0],
                  [0, 0, 0, 0, 0]
                )}
                initial="initial"
                animate="animate"
              >
                <Hero_icons
                  rotate={"rotate(-65deg)"}
                  icons={<MdDesignServices />}
                  color="#EB3678"
                />
              </motion.div>
              <motion.div
                class="hero_icon"
                variants={createLoopAnimationVariants(
                  [0, -5, 0, -5, 0],
                  [0, 0, 0, 0],
                  [0, 360, 0]
                )}
                initial="initial"
                animate="animate"
              >
                <Hero_icons
                  rotate={"rotate(-120deg)"}
                  icons={<FaPuzzlePiece />}
                  color="#36BA98"
                />
              </motion.div>
            </div>
          </div>
          presence
        </h1>
      </div>
      <div className="hero_content">
        <div className="codeeditior">
          <div className="code_editor_navbar">
            <Editornavbar />
          </div>
          <div className="code_editor_display">
            <div className="code_editor_sidebar">
              <Editor_sidebar />
            </div>
            <div className="code_editor_code_are">
              <div className="editor1">
                <Code_Editor
                  title={"index.html"}
                  logo={<FaHtml5 />}
                  color={"#fd8446"}
                  code={[]}
                />
              </div>
              <div className="editor2">
                <Code_Editor
                  title={"SuccesSolution.py"}
                  logo={<FaPython />}
                  color={"#9dcee6"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
