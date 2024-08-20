import React from 'react'
import './Editor.css'

const Code_Editor = ({ title ,color,logo}) => {
    return (
      <div className="Code_Editor">
        <div className="editor_tabs">
                <div style={{color:color}}>{logo}</div>
          <div>{title}</div>
            </div>
            <div className="code_area">
                <ul>
                    
                </ul>
            </div>
      </div>
    );
};

export default Code_Editor
