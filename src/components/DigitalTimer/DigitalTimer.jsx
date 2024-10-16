import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DigitalTimer = () => {
  const location = useLocation();
  const { minutes } = location.state || { minutes: 0 };
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prevSecondsLeft => {
        if (prevSecondsLeft <= 0) clearInterval(timer);
        return prevSecondsLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  const handleSwitchToAnalog = () => {
    navigate('/analog-timer', { state: { minutes } });
  };

  return (
    <div className="digital-timer">
      <h1>{Math.floor(secondsLeft / 60)}:{secondsLeft % 60 < 10 ? `0${secondsLeft % 60}` : secondsLeft % 60}</h1>
      <button onClick={() => navigate('/set-timer')}>Avbryt</button>
      <button onClick={handleSwitchToAnalog}>Byt till Analog Vy</button>
    </div>
  );
};

export default DigitalTimer;
