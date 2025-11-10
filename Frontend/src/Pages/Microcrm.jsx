import React, { useState } from "react";
import contact from "../assets/crm.jpg";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./microcrm.css";

const Microcrm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null); // State for handling errors

  const handleSubmit = async (e) => { // 👈 Made function async
    e.preventDefault();
    setError(null); // Clear previous errors
    
    const formData = { name, email, phone, subject, message };

    try {
      // Await the API call
      await axios.post("https://company-backend-36tw.onrender.com/api/v1/contact", formData);
      
      // Success: Reset state and show success message
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (err) {
      console.error("Form submission failed:", err);
      setError("Demo request failed. Please check your network and try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="Contact_landing">
        <div className="crmlanding"> {/* Removed all inline styles here */}
          <div className="crmleft">
            {/* Removed inline width/height from the inner div and img. Let CSS handle it. */}
            <div> 
              <img src={contact} alt="Contact" /> 
            </div>
          </div>
          <div className="crmright">
            <div>
              <h1 style={{ fontSize: "2rem", width: "100%", marginBottom: "1rem" }}>
                Book Your Demo — MicroCRM
              </h1>
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
                {/* Inputs for Name and Email */}
                <div style={{ width: "50%" }}>
                  <label htmlFor="name">Name:</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Phone"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <br />
              <label htmlFor="subject">Subject:</label>
              <br />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="submit_btn">
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "white",
                    border: "1px solid var(--clr--primary-orange)",
                    color: "var(--clr--primary-orange)",
                  }}
                  type="submit"
                >
                  Submit
                </motion.button>
              </div>
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="success_message" style={{ marginTop: "1rem", textAlign: "center", color: "green" }}>
                  <p>Form submitted successfully! We'll be in touch soon.</p>
                </div>
              )}
              
              {/* Error Message */}
              {error && (
                <div className="error_message" style={{ marginTop: "1rem", textAlign: "center", color: "red" }}>
                  <p>{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Microcrm;


