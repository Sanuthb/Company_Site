import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero';
import About from "../components/About/About";
import Services from "../components/Services/Services";

const Home = () => {
  return (
      <main>
          <Navbar />
          <Hero />
          <About />
          <Services/>
    </main>
  )
}

export default Home
