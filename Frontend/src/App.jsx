import React from 'react'
import './index.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import DesptopInitialLandingPage from './Pages/DesptopInitialLandingPage/DesptopInitialLandingPage';
import useWindowSize from './Hooks/useWindowSize'
import About from './Pages/About';
const App = () => {

  // const {width} = useWindowSize()
  // const isMobile = width <= 768;
  
  return (
    <Routes>
      {/* {
        isMobile && <Route path="/" element={<Home />} />
      } */}
      {/* <Route path="/" element={<DesptopInitialLandingPage />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App
