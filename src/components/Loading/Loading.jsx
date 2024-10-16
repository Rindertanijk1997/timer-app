// src/components/Loading/Loading.jsx
import React from 'react';
import './Loading.css';

const Loading = ({ onLogoClick }) => {
    return (
        <div className="loading-container" onClick={onLogoClick}>
            <h1 className="logo-h1">Interval</h1>
            <p className="logo-p">For all your timing needs</p>
        </div>
    );
};

export default Loading;

