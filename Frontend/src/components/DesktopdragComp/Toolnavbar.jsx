import React from "react";
import "./Main.css";
import { BsCursor } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { IoTextOutline } from "react-icons/io5";

const Toolnavbar = () => {
  return (
    <div className="toolbar">
      <div>
        <BsCursor />
      </div>
      <div>
        <FaRegSquare />
      </div>
      <div>
        <FaRegCircle />
      </div>
      <div>
        <FaPencilAlt />
      </div>
      <div>
        <FaImage />
      </div>
      <div>
        <MdColorLens />
      </div>
      <div>
        <IoTextOutline />
      </div>
    </div>
  );
};

export default Toolnavbar;
