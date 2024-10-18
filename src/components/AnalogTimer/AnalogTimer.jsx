import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../TimerContext';
import './AnalogTimer.css';

const AnalogTimer = () => {
  const { secondsLeft, initialTotalDuration, setTimerActive } = useContext(TimerContext); // Hämta initialTotalDuration
  const navigate = useNavigate();

  const [secondDegrees, setSecondDegrees] = useState(0);
  const [minuteDegrees, setMinuteDegrees] = useState(0);

  useEffect(() => {
    const updateClock = () => {
      const seconds = secondsLeft % 60;

      // Beräkna sekundvisarens rotation
      const secondRotation = 360 - ((seconds / 60) * 360);
      setSecondDegrees(secondRotation);

      // Beräkna minutvisarens rotation (börjar vid 12)
      const elapsedSeconds = initialTotalDuration - secondsLeft; // Hur många sekunder har gått
      const minuteRotation = (elapsedSeconds / initialTotalDuration) * 360; // Räkna ut graden för minutvisaren
      setMinuteDegrees(minuteRotation);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [secondsLeft, initialTotalDuration]);

  const handleCancel = () => {
    setTimerActive(false);  // Stoppa timern
    navigate('/set-timer'); // Navigera tillbaka till set-timer sidan
  };

  return (
    <div className="analog-timer">
      <h1 className='Analog_h1'>Interval</h1>
      <div className="clock-container">
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
              transform={`rotate(${minuteDegrees})`} // Rätt minutvisare
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-85"
              stroke="black"
              strokeWidth="1.5"
              transform={`rotate(${secondDegrees})`} // Rätt sekundvisare
            />
          </g>
        </svg>
      </div>
      <button onClick={handleCancel} className="Analog_button">Avbryt</button>
    </div>
  );
};

export default AnalogTimer;

