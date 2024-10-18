import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../TimerContext';
import './AnalogTimer.css';

const AnalogTimer = () => {
  const { secondsLeft, initialTotalDuration, setTimerActive } = useContext(TimerContext);
  const [secondDegrees, setSecondDegrees] = useState(0);
  const [minuteDegrees, setMinuteDegrees] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const seconds = secondsLeft % 60;
      setSecondDegrees(360 - (seconds / 60) * 360);
      setMinuteDegrees((initialTotalDuration - secondsLeft) / initialTotalDuration * 360);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft, initialTotalDuration]);

  const handleCancel = () => {
    setTimerActive(false);
    navigate('/set-timer');
  };

  return (
    <div className="analog-timer">
      <h1 className='Analog_h1'>Interval</h1>
      <div className="clock-container">
        <svg width="200" height="200">
          <g transform="translate(100, 100)">
            {Array.from({ length: 60 }, (_, i) => (
              <line key={i} x1="0" y1="-95" x2="0" y2="-85" stroke="black" strokeWidth="1" transform={`rotate(${i * 6})`} />
            ))}
            <line x1="0" y1="0" x2="0" y2="-70" stroke="black" strokeWidth="2.5" transform={`rotate(${minuteDegrees})`} />
            <line x1="0" y1="0" x2="0" y2="-85" stroke="black" strokeWidth="1.5" transform={`rotate(${secondDegrees})`} />
          </g>
        </svg>
      </div>
      <button onClick={handleCancel} className="Analog_button">Avbryt</button>
    </div>
  );
};

export default AnalogTimer;
