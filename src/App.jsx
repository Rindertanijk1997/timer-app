import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TimerProvider } from './components/TimerContext';
import Loading from './components/Loading/Loading';
import SetTimer from './components/SetTimer/SetTimer';
import DigitalTimer from './components/DigitalTimer/DigitalTimer';
import AnalogTimer from './components/AnalogTimer/AnalogTimer';
import AlarmView from './components/AlarmView/AlarmView';
import NavMenu from './components/NavMenu/NavMenu';
import './App.css';

const routesWithNavMenu = ['/set-timer', '/digital-timer', '/analog-timer', '/nav-menu'];

const App = () => (
  <Router>
    <TimerProvider>
      <div className="app-container">
        <div className="mobile-screen">
          <AppContent />
        </div>
      </div>
    </TimerProvider>
  </Router>
);

const AppContent = () => {
  const { pathname } = useLocation();
  return (
    <>
      {routesWithNavMenu.includes(pathname) && <NavMenu />}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/set-timer" element={<SetTimer />} />
        <Route path="/digital-timer" element={<DigitalTimer />} />
        <Route path="/analog-timer" element={<AnalogTimer />} />
        <Route path="/alarm-view" element={<AlarmView />} />
      </Routes>
    </>
  );
};

export default App;




