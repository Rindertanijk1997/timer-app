// src/App.js
import React, { useState } from 'react';
import Loading from './components/Loading/Loading';
import SetTimer from './components/SetTimer/SetTimer';
import './App.css'; 

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('Loading'); 

  const handleLogoClick = () => {
    setCurrentComponent('SetTimer'); 
  };

  return (
    <div className="app-container">
      <div className="mobile-screen">
        {currentComponent === 'Loading' && <Loading onLogoClick={handleLogoClick} />}
        {currentComponent === 'SetTimer' && <SetTimer />}
      </div>
    </div>
  );
}

export default App;


