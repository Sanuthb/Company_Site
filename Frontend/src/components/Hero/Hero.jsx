import React from "react";
import "./Hero.css";
import useEyeMovement from "../../Hooks/useEyeballmovement";
import { motion } from 'framer-motion'
// import Editornavbar from "../Editorcomponents/Editornavbar";
// import Editor_sidebar from "../Editorcomponents/Editor_sidebar";
// import Code_Editor from "../Editorcomponents/Code_Editor";
// import { FaHtml5 } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { FaReact } from "react-icons/fa6";

const Hero = () => {

  useEyeMovement(".eyeball", ".ball");


  return (
    <div
      className="hero"
    >
      <div className="hero_content">
        <div className="hero_heading">
          <h1>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            <div className="hero_designbox"></div>
            Design
          </h1>
          <h1>Meets</h1>
          <h1>
            <div className="eyeball">
              <div className="ball"></div>
            </div>
            <div className="eyeball">
              <div className="ball"></div>
            </div>
            Precision
          </h1>
        </div>
        <div className="hero_para">
          <p>
            With just a few clicks, Street2Site brings your business to life,
            allowing you to focus on perfecting the final, impactful details.
          </p>
        </div>
        <div className="hero_btn">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* <div className="hero_content">
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
      </div> */}
    </div>
  );
};

export default Hero;
