import React from 'react'
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import { VscDebugAltSmall } from "react-icons/vsc";
import { LuLayoutDashboard } from "react-icons/lu";
import "./Editor.css";

const Editor_sidebar = () => {
  return (
    <div className=' Editor_sidebar'>
          <div><HiOutlineDocumentDuplicate/></div>
          <div><IoSearch/></div>
          <div><IoIosGitBranch/></div>
          <div><VscDebugAltSmall/></div>
          <div><LuLayoutDashboard/></div>
    </div>
  )
}

export default Editor_sidebar
