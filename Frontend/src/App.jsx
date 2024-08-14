import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from "./components/Services/Services";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>

  );
}

export default App
