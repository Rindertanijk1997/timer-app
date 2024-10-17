import React from 'react';
import './AlarmView.css';
import AlarmIcon from '../../Assets/alarmIcon.svg'; // Kontrollera sökvägen

const AlarmView = () => {
  return (
    <div className="alarm-view-container">
      <img src={AlarmIcon} alt="Alarm Icon" className="alarm-icon" />
      <h1 className="times-up-text">Times Up!</h1>
    </div>
  );
};

export default AlarmView;