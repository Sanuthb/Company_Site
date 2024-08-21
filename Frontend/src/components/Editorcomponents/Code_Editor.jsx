import React, { useState } from "react";
import "./Editor.css";

const Code_Editor = ({ title = [], color = [], logo = [], code = [] }) => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  return (
    <div className="Code_Editor">
      {/* Tabs for file titles */}
      <div className="editor_tabs">
        {title.map((fileTitle, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`editor_tab_content ${
              activeTab === index ? "active" : ""
            }`}
          >
            <div className="code_tab_logo" style={{ color: color[index] }}>
              {logo[index]}
            </div>
            <div className="code_tab_title">{fileTitle}</div>
          </div>
        ))}
      </div>

      <div className="code_area">
        <div className="code_container">
          <div className="line_numbers">
            {code[activeTab].split("\n").map((_, lineIndex) => (
              <div key={lineIndex} className="line_number">
                {lineIndex + 1}.
              </div>
            ))}
          </div>
          <div className="code_content">
            <pre dangerouslySetInnerHTML={{ __html: code[activeTab] }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code_Editor;
