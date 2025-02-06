import React, { useEffect, useState } from 'react';
import { dataGenerator } from './getData';
import CalendarGrid from './components/CalendarGrid';
import MonthLabels from './components/MonthLabels';
import RowLabels from './components/RowLabels';
import StatusBar from './components/StatusBar';
import { colorLevels } from './constants';
import './App.css';

const Calendar = () => {
  const [calendarData, setCalendarData] = useState([]);
  const [preDateBoxes, setPreDateBoxes] = useState(0);
  const [postDateBoxes, setPostDateBoxes] = useState(0);
  const [totalColumns, setTotalColumns] = useState(0);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const data = dataGenerator("2023-12-15", "2024-12-15");
    setCalendarData(data);
  }, []);

  useEffect(() => {
    if (calendarData.length > 0) {
      const firstDay = new Date(calendarData[0].date).getDay();
      const lastDay = new Date(calendarData[calendarData.length - 1].date).getDay();
      const totalBox = calendarData.length + firstDay + (6 - lastDay);
      const totalCols = Math.ceil(totalBox / 7);

      setPreDateBoxes(firstDay);
      setPostDateBoxes(6 - lastDay);
      setTotalColumns(totalCols);
      setStyles({
        '--datecols': totalCols,
        '--datecolor': colorLevels[0],
      });
    }
  }, [calendarData]);

  return (
    <div className="calendar" style={styles}>
      <CalendarGrid calendarData={calendarData} preDateBoxes={preDateBoxes} postDateBoxes={postDateBoxes} />
      <MonthLabels calendarData={calendarData} totalColumns={totalColumns} />
      <RowLabels />
      <StatusBar />
    </div>
  );
};

export default Calendar;
