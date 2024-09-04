import React, { useState, useCallback } from "react";
import "./Enquire_popup.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Enquiry_popup_tigger,
  Enquiry_selection_atom,
  enquiry_status_atom,
} from "../../Atoms/Enquiry_atom/Enquiry_atom";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { EMAILJS_API, ENQUIRY_TEMP_ID, Service_ID } from "../../../API_KEYS";
import Enquiry_close_btn from "../Enquiry_close_btn/Enquiry_close_btn";

const Enquire_popup = () => {
  const options = ["Website", "SEO", "UI/UX", "Success Solution"];
  const [enquiryfrom, setEnquiryfrom] = useRecoilState(Enquiry_selection_atom);
  const [enquirystatus, setEnquirystatus] = useRecoilState(enquiry_status_atom);
  const enquiryTrigger = useRecoilValue(Enquiry_popup_tigger)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleOptionClick = useCallback(
    (option) => {
      setEnquiryfrom((prev) => {
        const currentOptions = prev.options || [];
        const updatedOptions = currentOptions.includes(option)
          ? currentOptions.filter((item) => item !== option)
          : currentOptions.length < options.length
          ? [...currentOptions, option]
          : currentOptions;

        return {
          ...prev,
          options: updatedOptions,
        };
      });
    },
    [setEnquiryfrom, options]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (formData) => {
    emailjs
      .send(Service_ID, ENQUIRY_TEMP_ID, formData, EMAILJS_API)
      .then(() => {
        setEnquirystatus("Form Submitted");
      })
      .catch(() => {
        setEnquirystatus("Failed to submit");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...form,
      options: enquiryfrom.options,
    };

    setEnquiryfrom((prev) => ({
      ...prev,
      ...formData,
    }));
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    sendEmail(formData);
  };

  if (!enquiryTrigger) return null;

  return (
    <motion.div
      className="Enquire_popup"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <div className="enquire_popup_container">
        <div>
          <div className="popup_heading">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Start a project
            </motion.h1>
          </div>
          <div className="popup_options">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h5>What can we do for you?</h5>
              <div className="options">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={`option_item ${
                      enquiryfrom.options.includes(option) ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <form className="popup_information" onSubmit={handleSubmit}>
                <h5>Your information</h5>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleInputChange}
                />
                <br />
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleInputChange}
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleInputChange}
                />
                <br />
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleInputChange}
                ></textarea>
                <br />
                <div className="Enquiry_btn">
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "white",
                      border: "1px solid var(--clr--primary-orange)",
                      color: "var(--clr--primary-orange)",
                    }}
                  >
                    Submit
                  </motion.button>
                  <p>{enquirystatus}</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Enquiry_close_btn/>
    </motion.div>
  );
};

export default Enquire_popup;
