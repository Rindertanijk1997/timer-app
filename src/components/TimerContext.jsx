import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [initialTotalDuration, setInitialTotalDuration] = useState(0); 
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
    const totalSeconds = minutes * 60;
    setSecondsLeft(totalSeconds);
    setInitialTotalDuration(totalSeconds); // Spara den totala varaktigheten
    setTimerActive(true);
  };

  return (
    <TimerContext.Provider value={{ secondsLeft, initialTotalDuration, setSecondsLeft, setTimerActive, startTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
