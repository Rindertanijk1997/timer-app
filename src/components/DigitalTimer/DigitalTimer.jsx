import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../TimerContext';
import './DigitalTimer.css'

const DigitalTimer = () => {
  const { secondsLeft, setTimerActive } = useContext(TimerContext);
  const navigate = useNavigate();

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const handleSwitchToAnalog = () => {
    navigate('/analog-timer');
  };

  return (
    <div className="digital-timer">
      <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
      <button onClick={() => navigate('/set-timer')}>Avbryt</button>
      <button onClick={handleSwitchToAnalog}>Byt till Analog Vy</button>
    </div>
  );
};

export default DigitalTimer;