import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Timer from 'easytimer.js';

const AnalogTimer = () => {
    const location = useLocation();
    const { minutes } = location.state || { minutes: 0 };
    const navigate = useNavigate();
    const [timer] = useState(new Timer());
    const [secondDegrees, setSecondDegrees] = useState(0);
    const [minuteDegrees, setMinuteDegrees] = useState(0);

    useEffect(() => {
        timer.start({ countdown: true, startValues: { seconds: minutes * 60 } });

        timer.addEventListener('secondsUpdated', () => {
            const remainingTime = timer.getTotalTimeValues();
            setSecondDegrees(360 - (remainingTime.seconds * 6));
            setMinuteDegrees(360 - (remainingTime.minutes * 6 + (remainingTime.seconds / 60) * 6));
        });

        timer.addEventListener('targetAchieved', () => {
            console.log('Timer finished!');
        });

        return () => {
            timer.stop();
        }
    }, [minutes, timer]);

    const handleSwitchToDigital = () => {
        navigate('/digital-timer', { state: { minutes } });
    };

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