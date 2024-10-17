import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../TimerContext'; 

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
                <button className="arrow" onClick={decreaseMinutes}>←</button>
                <section className="minutes">
                    <span className="minutes-time">{minutes}</span>
                    <h3 className="minutes-h3">Minuter</h3>
                </section>
                <button className="arrow" onClick={increaseMinutes}>→</button>
            </section>
            <button className="start-button" onClick={startTimerAndNavigate}>Starta Timer</button>
        </div>
    );
};

export default SetTimer;