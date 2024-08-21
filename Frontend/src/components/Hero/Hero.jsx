import React from "react";
import "./Hero.css";
import Hero_icons from "../Hero_components/Hero_icons";
import { MdAutoGraph } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
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
import { FaReact } from "react-icons/fa6";

const Hero = () => {
  return (
    <div class="hero">
      <div className="hero_content">
        <div className="hero_side_icons">
          <motion.div
            class="hero_icon1"
            variants={createLoopAnimationVariants(
              [0, 20, 0, 20, 0],
              [0, 0, 0, 0],
              [0, 0, 0]
            )}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(30deg)"}
              icons={<FaInstagram />}
              color={"#DB005B"}
            />
          </motion.div>
          <motion.div
            class="hero_icon2"
            variants={createLoopAnimationVariants([], [0, 10, 0, 10, 0], [0,40,0,40,0])}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(10deg)"}
              icons={<TbBulb />}
              color={"#F4CE14"}
            />
          </motion.div>
          <motion.div
            class="hero_icon3"
            variants={createLoopAnimationVariants([], [0, 10, 0, 10, 0], [])}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(10deg)"}
              icons={<IoMegaphoneSharp />}
              color={"#4158A6"}
            />
          </motion.div>
        </div>

        <div className="hero_heading_content">
          <div className="hero_Heading">
            <h1>Revolutionary </h1>
          </div>
          <div className="hero_Heading">
            <h1>Solutions</h1>
          </div>
          <div className="hero_ctc_button">
            <button>Get Started</button>
          </div>
        </div>
        <div className="hero_side_icons">
          <motion.div
            class="hero_icon4"
            variants={createLoopAnimationVariants(
              [],
              [0, -10, 0, -10,0],
              [0, 0, 0]
            )}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(30deg)"}
              icons={<MdAutoGraph />}
              color={"#88D66C"}
            />
          </motion.div>
          <motion.div
            class="hero_icon5"
            variants={createLoopAnimationVariants(
              [],
              [0, -5, 0, -5, 0],
              [0, 45, 0, 45, 0]
            )}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(50deg)"}
              icons={<MdDesignServices />}
              color={"#EB3678"}
            />
          </motion.div>
          <motion.div
            class="hero_icon6"
            variants={createLoopAnimationVariants([0, 10, 0, 10, 0], [], [])}
            initial="initial"
            animate="animate"
          >
            <Hero_icons
              rotate={"rotate(10deg)"}
              icons={<FaPuzzlePiece />}
              color={"#B4D6CD"}
            />
          </motion.div>
        </div>
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
            <div className="code_editor_code_area">
              <div className="editor1">
                <Code_Editor
                  title={["index.html", "main.jsx"]}
                  logo={[<FaHtml5 />, <FaReact />]}
                  color={["#fd8446", "#0fddef"]}
                  code={[
                    `<span class="tag">&lt;html&gt;</span>
<span class="tag">&lt;head&gt;</span>
<span class="tag">&lt;title&gt;</span><span class="string">Welcome to Street2Site</span><span class="tag">&lt;/title&gt;</span>
<span class="tag">&lt;/head&gt;</span>
<span class="tag">&lt;body&gt;</span>

<span class="tag">&lt;h1&gt;</span><span class="string">Welcome to Street2Site!</span><span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;p&gt;</span><span class="string">We wish you the best of luck in your business endeavors.</span><span class="tag">&lt;/p&gt;</span>

<span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>


                   `,
                    `
<span class="keyword">import</span> <span class="keyword">React</span> <span class="keyword">from</span> "react";
<span class="keyword">import</span> <span class="keyword">'./App.css'</span>;

<span class="keyword">function</span> <span class="keyword">App</span>() {
  <span class="keyword">return</span> (
    <span class="tag">&lt;div&gt;</span>
      <span class="string">Welcome to React</span>
    <span class="tag">&lt;/div&gt;</span>
  );
}

<span class="keyword">export</span> <span class="keyword">default</span> <span class="keyword">App</span>;
                `,
                  ]}
                />
              </div>
              <div className="editor2">
                <Code_Editor
                  title={["Success.py"]}
                  logo={[<FaPython />]}
                  color={["#a6d3e8"]}
                  code={[
                    `<span class='comment'># Problem: Success to your business</span>
<span class='keyword'>def</span> <span class='keyword'>achieve_success</span>():
  <span class='keyword'>steps</span> = <span class='number'>5</span>
  <span class='keyword'>while</span> <span class='keyword'>steps</span> > <span class='number'>0</span>:
    <span class='builtin'>print</span>(f'Working on step {steps}...')
    <span class='builtin'>print</span>(f'Successfully completed step {step}!')
<span class='keyword'>def</span> <span class='keyword'>achieve_success</span>():
`,
                  ]}
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
