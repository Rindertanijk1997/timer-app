import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TimerProvider } from './components/TimerContext';
import Loading from './components/Loading/Loading';
import SetTimer from './components/SetTimer/SetTimer';
import DigitalTimer from './components/DigitalTimer/DigitalTimer';
import AnalogTimer from './components/AnalogTimer/AnalogTimer';
import AlarmView from './components/AlarmView/AlarmView';
import './App.css';
import navIcon from './Assets/navicon.svg'; // Importera ikonen

const App = () => {
  return (
    <Router>
      <TimerProvider>
        <div className="app-container">
          <div className="mobile-screen">
            {/* Placera ikonen här så att den är i det övre vänstra hörnet av mobile-screen */}
            <img src={navIcon} alt="Navigation Icon" className="nav-icon" />
            <Routes>
              <Route path="/" element={<Loading />} />
              <Route path="/set-timer" element={<SetTimer />} />
              <Route path="/digital-timer" element={<DigitalTimer />} />
              <Route path="/analog-timer" element={<AnalogTimer />} />
              <Route path="/alarm-view" element={<AlarmView />} />
            </Routes>
          </div>
        </div>
      </TimerProvider>
    </Router>
  );
}

export default App;

