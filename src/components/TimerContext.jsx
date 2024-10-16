import React, { createContext, useState, useEffect } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (timerActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft(seconds => seconds - 1);
      }, 1000);
    } else if (secondsLeft <= 0) {
      clearInterval(timer);
      setTimerActive(false);
    }

    return () => clearInterval(timer);
  }, [secondsLeft, timerActive]);

  return (
    <TimerContext.Provider value={{ secondsLeft, setSecondsLeft, setTimerActive }}>
      {children}
    </TimerContext.Provider>
  );
};