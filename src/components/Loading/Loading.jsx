import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';
import Logo from '../../Assets/logo.png'; 

const Loading = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/set-timer');
    };

    return (
        <div className="loading-container" onClick={handleLogoClick}>
            <img src={Logo} alt="Logo" className="loading-icon" /> 
            <h1 className="logo-h1">Interval</h1>
            <p className="logo-p">For all your timing needs</p>
        </div>
    );
};

export default Loading;
