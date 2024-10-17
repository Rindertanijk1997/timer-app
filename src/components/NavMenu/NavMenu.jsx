// src/components/NavMenu/NavMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../../Assets/navicon.svg';
import './NavMenu.css';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <img src={navIcon} alt="Navigation Icon" className="nav-icon" onClick={toggleMenu} />
            {isOpen && (
                <div className="nav-menu">
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Start</Link></li>
                        <li><Link to="/set-timer" onClick={toggleMenu}>Set Timer</Link></li>
                        <li><Link to="/digital-timer" onClick={toggleMenu}>Digital Timer</Link></li>
                        <li><Link to="/analog-timer" onClick={toggleMenu}>Analog Timer</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavMenu;

