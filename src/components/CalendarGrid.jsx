import React from 'react';
import DateBox from './DateBox';
import EmptyBoxes from './EmptyBoxes';

const CalendarGrid = ({ calendarData, preDateBoxes, postDateBoxes, colorLevels }) => {
  return (
    <div className="date-container">
      <EmptyBoxes count={preDateBoxes} />
      {calendarData.map((data, index) => (
        <DateBox key={`date-${index}`} date={data.date} level={data.level} colors={colorLevels} />
      ))}
      <EmptyBoxes count={postDateBoxes} />
    </div>
  );
}

export default CalendarGrid;
