import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AnalogTimer.css';
import Timer from 'easytimer.js';

const AnalogTimer = () => {
    const location = useLocation();
    const { minutes } = location.state || { minutes: 0 };
    const navigate = useNavigate();
    const [timer] = useState(new Timer());
    const [secondDegrees, setSecondDegrees] = useState(0);
    const [minuteDegrees, setMinuteDegrees] = useState(0);

    useEffect(() => {
        const startTime = Date.now();
    
        const intervalId = setInterval(() => {
            const now = Date.now();
            const elapsed = now - startTime;  // Tiden som förflutit i millisekunder
            const totalSeconds = elapsed / 1000;  // Omvandla till sekunder
    
            setSecondDegrees((totalSeconds % 60) * 6);  // Sekundvisaren
    
            if (minutes > 0) {
                const minuteRotation = (totalSeconds / (minutes * 60)) * 360;
                setMinuteDegrees(minuteRotation % 360);
    
                // Kontrollera om timern har nått sin inställda tid
                if (totalSeconds >= minutes * 60) {
                    clearInterval(intervalId);  // Stoppa timern
                    navigate('/alarm-view');  // Byt till AlarmView
                }
            }
        }, 1000 / 60);  
    
        return () => {
            clearInterval(intervalId);
        };
    }, [minutes, navigate]);  // Inkludera 'navigate' i beroendelistan 

    const handleSwitchToDigital = () => {
        navigate('/digital-timer', { state: { minutes } });
    };
    return (
        <div className="analog-timer">
            <h1>Analog Timer</h1>
            <svg width="200" height="200">
                <g transform="translate(100, 100)">
                    {Array.from({ length: 60 }, (_, index) => (
                        <line key={index} x1="0" y1="-95" x2="0" y2="-85" stroke="black" strokeWidth="1" transform={`rotate(${index * 6})`} />
                    ))}
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-70"
                        stroke="black"
                        strokeWidth="2.5"
                        transform={`rotate(${minuteDegrees})`}
                    />
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-85"
                        stroke="black"
                        strokeWidth="1.5"
                        transform={`rotate(${secondDegrees})`}
                    />
                </g>
            </svg>
            <button onClick={() => navigate('/set-timer')}>Avbryt</button>
            <button onClick={handleSwitchToDigital}>Byt till Digital Vy</button>
        </div>
    );
};
export default AnalogTimer;