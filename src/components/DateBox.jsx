import React from 'react';
import { colorLevels } from '../constants';

const DateBox = ({ date, level }) => {
  return (
    <div className="date-box" style={{ backgroundColor: colorLevels[level] }}>
      <span>{date}</span>
    </div>
  );
}

export default DateBox;
