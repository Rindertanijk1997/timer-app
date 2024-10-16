import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Timer from 'easytimer.js';

const DigitalTimer = () => {
  const location = useLocation();
  const { minutes } = location.state || { minutes: 0 };
  const navigate = useNavigate();
  const [timer] = useState(new Timer());
  const [timeValues, setTimeValues] = useState({ minutes: minutes, seconds: 0 });

  useEffect(() => {
    timer.start({ countdown: true, startValues: { seconds: minutes * 60 } });

    timer.addEventListener('secondsUpdated', () => {
      setTimeValues({
        minutes: timer.getTimeValues().minutes,
        seconds: timer.getTimeValues().seconds
      });
    });

    timer.addEventListener('targetAchieved', () => {
      console.log('Timer finished!');
    });

    return () => timer.stop();
  }, [minutes, timer]);

  const handleSwitchToAnalog = () => {
    navigate('/analog-timer', { state: { minutes } });
  };

  return (
    <div className="digital-timer">
      <h1>{timeValues.minutes}:{timeValues.seconds < 10 ? `0${timeValues.seconds}` : timeValues.seconds}</h1>
      <button onClick={() => navigate('/set-timer')}>Avbryt</button>
      <button onClick={handleSwitchToAnalog}>Byt till Analog Vy</button>
    </div>
  );
};

export default DigitalTimer;