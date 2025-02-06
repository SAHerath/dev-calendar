import React from 'react';

const DateBox = ({ date, level, colors }) => {
  return (
    <div className="date-box" style={{ backgroundColor: colors[level] }}>
      <span>{date}</span>
    </div>
  );
}

export default DateBox;
