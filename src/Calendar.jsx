import React, { useEffect, useState } from 'react';
import { dataGenerator } from './getData';
import CalendarGrid from './components/CalendarGrid';
import ColumnLabels from './components/ColumnLabels';
import RowLabels from './components/RowLabels';
import StatusBar from './components/StatusBar';
import './App.css';

const Calendar = ({ monthNames, dateNames, colorLevels }) => {
  const [calendarData, setCalendarData] = useState([]);
  const [preDateBoxes, setPreDateBoxes] = useState(0);
  const [postDateBoxes, setPostDateBoxes] = useState(0);
  const [totalColumns, setTotalColumns] = useState(0);
  const [styles, setStyles] = useState({});

  const totalActivity = 505;

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
      <CalendarGrid calendarData={calendarData} preDateBoxes={preDateBoxes} postDateBoxes={postDateBoxes} colorLevels={colorLevels} />
      <ColumnLabels calendarData={calendarData} totalColumns={totalColumns} monthNames={monthNames} />
      <RowLabels dateNames={dateNames} />
      <StatusBar colorLevels={colorLevels} totalActivity={totalActivity} />
    </div>
  );
};

Calendar.defaultProps = {
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dateNames: [' ', 'Mon', ' ', 'Wed', ' ', 'Fri', ' '],
  colorLevels: ['#cbd5e1', '#8be497', '#36ba59', '#2e9449', '#206a37'],
  // startDate: '2023-12-15',
  // endDate: '2024-12-15',
};

export default Calendar;
