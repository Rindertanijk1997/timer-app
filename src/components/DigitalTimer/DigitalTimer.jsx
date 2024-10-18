import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../TimerContext';
import './DigitalTimer.css'

const DigitalTimer = () => {
  const { secondsLeft, setTimerActive } = useContext(TimerContext);
  const navigate = useNavigate();

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const handleCancel = () => {
    setTimerActive(false);  // Stoppa timern
    navigate('/set-timer'); // Navigera tillbaka till set-timer sidan
  };

  return (
    <div className="digital-timer">
      <h1 className='Digital_h1'>interval</h1>
      <h2 className='Digital_clock'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      <button onClick={handleCancel} className='Digital_button'>Avbryt</button>
    </div>
  );
};

export default DigitalTimer;
