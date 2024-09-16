import React from "react";
import "./Service_page_comp.css";
import { MdArrowOutward } from "react-icons/md";
import {  useSetRecoilState } from "recoil";
import { Enquiry_popup_tigger } from "../../Atoms/Enquiry_atom/Enquiry_atom";

const Service_page_comp = ({ text, color }) => {
  const setenquiryTrigger = useSetRecoilState(Enquiry_popup_tigger);
  return (
    <div className="service_page_card_comp"  onClick={()=>{console.log("GrandParent clicked")}} style={{ backgroundColor: color }}>
      <h1>{text}</h1>
      <div className="service_page_comp_btn" onClick={()=>{console.log("Parent clicked")}}>
        <button
          onClick={() => {
            console.log("button clicked")
            setenquiryTrigger(true);
          }}
        >
          Enquire <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default Service_page_comp;
