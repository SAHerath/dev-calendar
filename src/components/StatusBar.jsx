import React from 'react';

const StatusBar = ({ colorLevels, totalActivity }) => {
  return (
    <div className="status-bar">
      <span>{totalActivity} activities in the last year</span>
      <div className="level-bar">
        <span>Less</span>
        {colorLevels.map((color, index) => (
          <div key={index} className="level-box" style={{ backgroundColor: color }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export default StatusBar;
