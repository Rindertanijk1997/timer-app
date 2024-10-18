import React from 'react';
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
  initial: { x: 0 }, 
  animate: {
    x: [-2, 2], 
    transition: { repeat: Infinity, repeatType: "reverse", duration: 0.05 } 
  }
};

const AlarmView = () => {
  const [waves, setWaves] = React.useState([]);
  const navigate = useNavigate();

  const addWave = () => {
    setWaves(prev => [...prev, Date.now()]);
  };

  React.useEffect(() => {
    const interval = setInterval(addWave, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alarm-view-container">
      {/* Vibrationseffekt på alarm-ikonen */}
      <motion.img
        src={AlarmIcon}
        alt="Alarm Icon"
        className="alarm-icon"
        variants={vibrationVariants}
        initial="initial"
        animate="animate"
      />
      <h1 className="times-up-text">Times Up!</h1>
      <AnimatePresence>
        {waves.map(key => (
          <motion.div
            key={key}
            className="wave"
            variants={waveVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        ))}
      </AnimatePresence>
      <section className="alarm_button">
        <button onClick={() => navigate('/set-timer')}>Set new timer!</button>
      </section>
    </div>
  );
};

export default AlarmView;