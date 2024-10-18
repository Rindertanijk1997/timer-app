import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Lägg till useNavigate
import './AlarmView.css';
import AlarmIcon from '../../Assets/alarmIcon.svg'; // Kontrollera sökvägen

const waveVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 3 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const AlarmView = () => {
  const [waves, setWaves] = React.useState([]);
  const navigate = useNavigate(); // Skapa navigate-funktionen

  const addWave = () => {
    setWaves(prev => [...prev, Date.now()]); // Använder timestamp som unik key
  };

  React.useEffect(() => {
    const interval = setInterval(addWave, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alarm-view-container">
      <img src={AlarmIcon} alt="Alarm Icon" className="alarm-icon" />
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
