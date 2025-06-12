import React from "react";
import "./Service_page_comp.css";
import { MdArrowOutward } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { Enquiry_popup_tigger } from "../../Atoms/Enquiry_atom/Enquiry_atom";

const Service_page_comp = ({ text, color, img1, img2, img3, width }) => {
  const setenquiryTrigger = useSetRecoilState(Enquiry_popup_tigger);

  return (
    <div
      className="service_page_card_comp"
      style={{ backgroundColor: color, width: width || "100%" }}
    >
      <div className="service_page_comp_text">
        <h1 style={{ color: "black", fontSize: "1.8rem" }}>{text}</h1>
        <div
          className="service_page_comp_btn"
        >
          <button
            onClick={() => {
              setenquiryTrigger(true);
            }}
          >
            Enquire <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service_page_comp;
