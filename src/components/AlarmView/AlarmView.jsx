import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AlarmView.css';
import AlarmIcon from '../../Assets/alarmIcon.svg';

const waveVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 3 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const vibrationVariants = {
  animate: { x: [-2, 2], transition: { repeat: Infinity, repeatType: "reverse", duration: 0.05 } }
};

const AlarmView = () => {
  const [waves, setWaves] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setWaves(waves => [...waves, Date.now()]), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alarm-view-container">
      <motion.img src={AlarmIcon} alt="Alarm Icon" className="alarm-icon" variants={vibrationVariants} animate="animate" />
      <h1 className="times-up-text">Times Up!</h1>
      <AnimatePresence>
        {waves.map(key => (
          <motion.div key={key} className="wave" variants={waveVariants} initial="initial" animate="animate" exit="exit" />
        ))}
      </AnimatePresence>
      <button onClick={() => navigate('/set-timer')} className="alarm_button">Set new timer!</button>
    </div>
  );
};

export default AlarmView;
