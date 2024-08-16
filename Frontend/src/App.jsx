import React from 'react'
import './index.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import DesptopInitialLandingPage from './Pages/DesptopInitialLandingPage/DesptopInitialLandingPage';
import useWindowSize from './Hooks/useWindowSize'
const App = () => {

  const {width} = useWindowSize()
  const isMobile = width <= 768;
  
  return (
    <Routes>
      {
        isMobile && <Route path="/" element={<Home />} />
      }
      <Route path="/" element={<DesptopInitialLandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App
