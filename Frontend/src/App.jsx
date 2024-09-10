import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Hooks/ScrollToTop";
import PageAnimation from "./Hooks/PageAnimation";
import Services from "./Pages/Services";
const App = () => {
  return (
    <>
      <PageAnimation>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </PageAnimation>
    </>
  );
};

export default App;
