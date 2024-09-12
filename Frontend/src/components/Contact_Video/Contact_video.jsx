import React from "react";
import "./Contact_video.css";
import contact_video from "../../assets/Video/contact.mp4"


const Contact_video = () => {


  return (
    <div className="contact_video_container" >
      <div className="contact_video" >
        <video src={contact_video} muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Contact_video;
