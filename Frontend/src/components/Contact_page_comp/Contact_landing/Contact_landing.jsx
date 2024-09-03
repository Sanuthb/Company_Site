import React from "react";
import "./Contact_landing.css";
import contact from "../../../assets/contact/contact.jpg";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  formDataState,
  formStatusState,
} from "../../../Atoms/Contactfrom_atom/ContactAtom";
import emailjs from "emailjs-com";
import {motion} from 'framer-motion'

const Contact_landing = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const setFormStatus = useSetRecoilState(formStatusState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lr8tlc5",
        "template_31jeup5",
        formData,
        "aS5MNuJ2YFh9woUBu"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormStatus("Email sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setFormStatus("Failed to send email.");
      });
  };

  const formStatus = useRecoilState(formStatusState)[0];

  return (
    <div className="Contact_landing">
      <div className="contact_landing_container">
        <div className="contact_landing_container_left">
          <div>
            <img src={contact} alt="Contact" />
          </div>
          <div className="contact_card">
            <h1>Get in Touch</h1>
            <div className="contact_details">
              <div className="contact_detail">
                <h1>Address</h1>
                <p>
                  492, Dodda Thoguru, Konappana Agrahara, Electronic City,
                  Bengaluru, Karnataka 560100
                </p>
              </div>
              <div className="contact_detail">
                <h1>Phone</h1>
                <p>+91 1234567890</p>
              </div>
              <div className="contact_detail">
                <h1>Email</h1>
                <p>street2sitee@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_landing_container_right">
          <div className="contact_form_heading">
            <h1>Have a Problem?</h1>
          </div>
          <form className="contact_form" onSubmit={handleSubmit}>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div style={{ width: "50%" }}>
                {" "}
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="input"
                  required
                />
              </div>
              <div style={{ width: "50%" }}>
                {" "}
                <label htmlFor="name">Email:</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Name"
                  className="input"
                  required
                />
              </div>
            </div>
            <label htmlFor="phone">Phone:</label>
            <br />
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input"
              required
            />
            <br />
            <label htmlFor="subject">Subject:</label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="input"
              required
            />
            <br />
            <label htmlFor="message">Your Message:</label>
            <br />
            <textarea
              cols={40}
              rows={3}
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <div className="submit_btn">
              <motion.button
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "white",
                  border: "1px solid var( --clr--primary-orange)",
                  color: "var( --clr--primary-orange)",
                }}
                type="submit"
              >
                Submit
              </motion.button>
              <p>{formStatus}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_landing;
