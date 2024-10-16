import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TimerProvider } from './components/TimerContext'; // Importera TimerProvider
import Loading from './components/Loading/Loading';
import SetTimer from './components/SetTimer/SetTimer';
import DigitalTimer from './components/DigitalTimer/DigitalTimer';
import AnalogTimer from './components/AnalogTimer/AnalogTimer';
import './App.css';

const App = () => {
  return (
    <Router>
      <TimerProvider> {/* Omslut dina routes med TimerProvider */}
        <div className="app-container">
          <div className="mobile-screen">
            <Routes>
              <Route path="/" element={<Loading />} />
              <Route path="/set-timer" element={<SetTimer />} />
              <Route path="/digital-timer" element={<DigitalTimer />} />
              <Route path="/analog-timer" element={<AnalogTimer />} />
            </Routes>
          </div>
        </div>
      </TimerProvider>
    </Router>
  );
}

export default App;