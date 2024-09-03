import React from "react";
import "./Enquire_popup.css";
import { useRecoilState } from "recoil";
import { Enquiry_selection_atom } from "../../Atoms/Enquiry_atom/Enquiry_atom";
import { motion } from "framer-motion";

const Enquire_popup = ({ trigger }) => {
  const options = ["Website", "SEO", "UI/UX", "Success Solution"];
  const [selectedoption, setselectedoption] = useRecoilState(
    Enquiry_selection_atom
  );
  console.log(selectedoption);
  return trigger ? (
    <div className="Enquire_popup">
      <div className="enquire_popup_container">
        <div>
          <div className="popup_heading">
            <h1>Start a project</h1>
          </div>
          <div className="popup_options">
            <h5>What can we do for you?</h5>
            <div className="options">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`option_item ${
                    selectedoption.includes(option) ? "active" : ""
                  }`}
                  onClick={() =>
                    setselectedoption((prev) =>
                      prev.includes(option)
                        ? prev.filter((item) => item !== option)
                        : prev.length < options.length
                        ? [...prev, option]
                        : prev
                    )
                  }
                >
                  {option}
                </div>
              ))}
            </div>
            <form className="popup_information">
              <h5>Your information</h5>
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" name="name" id="name" placeholder="Name" />
              <br />
              <label htmlFor="phone">Phone</label>
              <br />
              <input type="text" name="phone" id="phone" placeholder="Phone" />
              <br />

              <label htmlFor="email">Email</label>
              <br />
              <input type="text" name="email" id="email" placeholder="Email" />
              <br />

              <label htmlFor="message">Message</label>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
              <br />
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "white",
                  border: "1px solid var( --clr--primary-orange)",
                  color: "var( --clr--primary-orange)",
                }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Enquire_popup;
