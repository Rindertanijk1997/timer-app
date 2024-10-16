// src/components/Loading/Loading.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';

const Loading = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/set-timer');
    };

    return (
        <div className="loading-container" onClick={handleLogoClick}>
            <h1 className="logo-h1">Interval</h1>
            <p className="logo-p">For all your timing needs</p>
        </div>
    );
};

export default Loading;