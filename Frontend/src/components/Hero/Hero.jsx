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
import {motion} from 'framer-motion'
import { createLoopAnimationVariants } from "../../Framer_Animation/Animation";


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
      <div
        className="hero_content"
        style={{
          backgroundColor: "var(--clr--saturation-orange)",
          justifyContent: "flex-start",
        }}
      >
        <div className="codeeditior"></div>
      </div>
    </div>
  );
};

export default Hero;
