import React, { useState } from "react";
import contact from "../../../assets/contact/contact_vect.webp";
import "./Contact.css";
import { motion } from "framer-motion";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import axios from "axios";

const NewContact = () => {
  const [openleftQuestion, setOpenleftQuestion] = useState(0);
  const [openrightQuestion, setOpenrightQuestion] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const righttoggleQuestion = (index) => {
    setOpenrightQuestion(openrightQuestion === index ? -1 : index);
  };

  const lefttoggleQuestion = (index) => {
    setOpenleftQuestion(openleftQuestion === index ? -1 : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    axios.post("https://company-backend-36tw.onrender.com/api/v1/contact",formData)
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Reset after 3 seconds
    
  }


  const faqleftdata=[
    {
    question: "What's our vision?",
    answer:
      "Our vision is to empower small and local businesses by bringing them online with beautiful, functional websites—no coding needed. We believe every entrepreneur deserves a digital presence.",
  },
  {
    question: "What services does Street2Site offer?",
    answer:
      "We provide a no-code website builder, SEO optimization, mobile-friendly templates, branding support, and automated tools to help businesses grow online effortlessly.",
  },
  {
    question: "Who can use Street2Site?",
    answer:
      "Anyone—from street vendors and freelancers to shop owners and local service providers—can use Street2Site to quickly create a website and manage their business online.",
  },
  ] 

  const faqrightdata = [
  {
    question: "Do I need technical skills to use Street2Site?",
    answer:
      "Not at all! Our platform is designed for everyone, even if you have zero technical background. You can create and publish your website in just a few clicks.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes, we offer responsive customer support through chat and email. We're here to help you at every step of your website-building journey.",
  },
  {
    question: "Can I update my website after publishing?",
    answer:
      "Absolutely! You can log in anytime to make updates, change content, or tweak your design—no hassle involved.",
  },
];


  return (
    <>
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
                  <p>+91 9482211264 / +91 8088187900</p>
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
              {isSubmitted && (
                <div className="success_message" style={{ marginTop: "1rem" , textAlign: "center"}}>
                  <p>Form submitted successfully!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="FAQ">
        <div className="faq_heading">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq_containers">
          <div className="left_faq">
            {faqleftdata.map((faq, index) => (
              <div key={index} className="faq_item">
                <div
                  className="faq_question"
                  onClick={() => lefttoggleQuestion(index)}
                >
                  {openleftQuestion === index ? (
                    <BiUpArrowAlt size={30} />
                  ) : (
                    <BiDownArrowAlt size={30} />
                  )}
                  <h4>{faq.question}</h4>
                </div>
                {openleftQuestion === index && (
                  <p className="faq_answer">{faq.answer}</p>
                )}
                <hr />
              </div>
            ))}
          </div>
          <div className="right_faq">
            {faqrightdata.map((faq, index) => (
              <div key={index} className="faq_item">
                <div
                  className="faq_question"
                  onClick={() => righttoggleQuestion(index)}
                >
                  {openrightQuestion === index ? (
                    <BiUpArrowAlt size={30} />
                  ) : (
                    <BiDownArrowAlt size={30} />
                  )}
                  <h4>{faq.question}</h4>
                </div>
                {openrightQuestion === index && (
                  <p className="faq_answer">{faq.answer}</p>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewContact;
