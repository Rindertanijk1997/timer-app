import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../TimerContext'; 
import { motion } from 'framer-motion';
import pil from '../../Assets/pil.png'; // Importera bilden
import './SetTimer.css';

const SetTimer = () => {
    const [minutes, setMinutes] = useState(1);
    const navigate = useNavigate();
    const { startTimer } = useContext(TimerContext); 

    const increaseMinutes = () => {
        setMinutes(prevMinutes => prevMinutes + 1);
    };

    const decreaseMinutes = () => {
        setMinutes(prevMinutes => (prevMinutes > 1 ? prevMinutes - 1 : 1));
    };

    const startTimerAndNavigate = () => {
        startTimer(minutes); 
        navigate('/digital-timer'); 
    };

    return (
        <div className="set-timer-container">
            <section className='set-time'>
                <button className="arrow" onClick={decreaseMinutes}>
                    <img src={pil} alt="Decrease" className="arrow-img left-arrow" /> {/* Använd den nya klassen här */}
                </button>
                <section className="minutes">
                    <motion.span
                        className="minutes-time"
                        key={minutes}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    >
                        {minutes}
                    </motion.span>
                    <h3 className="minutes-h3">Minuter</h3>
                </section>
                <button className="arrow" onClick={increaseMinutes}>
                    <img src={pil} alt="Increase" className="arrow-img" />
                </button>
            </section>
            <button className="start_button" onClick={startTimerAndNavigate}>Starta Timer</button>
        </div>
    );
};

export default SetTimer;

