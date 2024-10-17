import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../TimerContext';
import './AnalogTimer.css'

const AnalogTimer = () => {
  const { secondsLeft } = useContext(TimerContext);
  const navigate = useNavigate();

  const [secondDegrees, setSecondDegrees] = useState(0);
  const [minuteDegrees, setMinuteDegrees] = useState(0);

  useEffect(() => {
    const totalDuration = secondsLeft;
  
    const updateClock = () => {
      const seconds = secondsLeft % 60;
      const totalMinutes = Math.floor(secondsLeft / 60);
  
      
      setSecondDegrees((360 - (seconds * 6)) % 360);
  
      const minuteRotation = 360 - (((totalDuration - secondsLeft) / totalDuration) * 360);
      setMinuteDegrees(minuteRotation);
    };
  
    const intervalId = setInterval(updateClock, 1000 / 60);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [secondsLeft]);

  return (
    <div className="analog-timer">
      <h1>Analog Timer</h1>
      <svg width="200" height="200">
        <g transform="translate(100, 100)">
          {Array.from({ length: 60 }, (_, index) => (
            <line key={index} x1="0" y1="-95" x2="0" y2="-85" stroke="black" strokeWidth="1" transform={`rotate(${index * 6})`} />
          ))}
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-70"
            stroke="black"
            strokeWidth="2.5"
            transform={`rotate(${minuteDegrees})`}
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-85"
            stroke="black"
            strokeWidth="1.5"
            transform={`rotate(${secondDegrees})`}
          />
        </g>
      </svg>
      <button onClick={() => navigate('/set-timer')}>Avbryt</button>
      <button onClick={() => navigate('/digital-timer')}>Byt till Digital Vy</button>
    </div>
  );
};

export default AnalogTimer;