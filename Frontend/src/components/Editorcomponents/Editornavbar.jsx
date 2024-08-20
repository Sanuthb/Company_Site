import React from 'react'
import './Editor.css'
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Editornavbar = () => {
  return (
    <div className="Editornavbar">
      <div className="editor_buttons">
        <div style={{ backgroundColor: "#fc6557" }}></div>
        <div style={{ backgroundColor: "#fcbd3e" }}></div>
        <div style={{ backgroundColor: "#1ec746" }}></div>
      </div>
      <div className="editor_search_bar">
        <div className="editor_arrows"><FaArrowLeftLong/><FaArrowRight/></div>
        <div className="editor_search">
          <span>
            <IoSearch />
          </span>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Editornavbar
