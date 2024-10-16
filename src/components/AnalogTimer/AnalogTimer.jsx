import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AnalogTimer = () => {
    const location = useLocation();
    const { minutes } = location.state || { minutes: 0 };
    const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(prevSecondsLeft => {
                if (prevSecondsLeft <= 0) {
                    clearInterval(timer);
                    return 0; // Se till att vi inte går under 0
                }
                return prevSecondsLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes]);

    const handleSwitchToDigital = () => {
        navigate('/digital-timer', { state: { minutes } });
    };

    const seconds = secondsLeft % 60;
    const minutesPassed = Math.floor(secondsLeft / 60);

  // Omvandla från "moturs" till "medurs" genom att subtrahera från 360 grader
const secondDegrees = 360 - ((seconds % 60) * 6);
const minuteDegrees = 360 - ((minutesPassed % 60) * 6 + (seconds / 60) * 6);
    return (
        <div className="analog-timer">
            <h1>Analog Timer</h1>
            <svg width="200" height="200">
                <g transform="translate(100, 100)">
                    {Array.from({ length: 60 }).map((_, index) => (
                        <line
                            key={index}
                            x1="0"
                            y1="-95"
                            x2="0"
                            y2="-85"
                            stroke="black"
                            strokeWidth="1"
                            transform={`rotate(${index * 6})`}
                        />
                    ))}
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-70"
                        stroke="blue"
                        strokeWidth="2.5"
                        transform={`rotate(${minuteDegrees})`}
                    />
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-85"
                        stroke="red"
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
