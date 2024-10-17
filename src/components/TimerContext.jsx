import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    let timer = null;
    if (timerActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft(seconds => seconds - 1);
      }, 1000);
    } else if (secondsLeft <= 0 && timerActive) {
      clearInterval(timer);
      setTimerActive(false);
      navigate('/alarm-view'); 
    }

    return () => clearInterval(timer);
  }, [secondsLeft, timerActive, navigate]); 

  const startTimer = (minutes) => {
    setSecondsLeft(minutes * 60);
    setTimerActive(true);
  };

  return (
    <TimerContext.Provider value={{ secondsLeft, setSecondsLeft, setTimerActive, startTimer }}>
      {children}
    </TimerContext.Provider>
  );
};