
import React, { useEffect, useState} from 'react';
import { dataGenerator } from './getData';
import './App.css';

function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [preDateBoxes, setPreDateBoxes] = useState(0);
  const [postDateBoxes, setPostDateBoxes] = useState(0);
  const [styles, setStyles] = useState({});
  
  // const dateContainer = useRef(null);

  const totalActivity = 505;
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const dateNames = [' ', 'Mon', ' ', 'Wed', ' ', 'Fri', ' '];
	const colorLevels = ['#cbd5e1', '#8be497', '#36ba59', '#2e9449', '#206a37'];

  useEffect(() => {
    const data = dataGenerator("2023-12-15", "2024-12-15");
    setCalendarData(data);
    // console.log(calendarData);
  }, []);

  useEffect(() => {
    if (calendarData.length > 0) {
      const firstDay = new Date(calendarData[0].date).getDay();
      const lastDay = new Date(calendarData[calendarData.length - 1].date).getDay();
      const totalBox = calendarData.length + firstDay + (6 - lastDay);
      const totalCols = Math.ceil(totalBox / 7);

      setPreDateBoxes(firstDay);
      setPostDateBoxes(6 - lastDay);
      setStyles({
        '--datecols': totalCols,
        '--datecolor': colorLevels[0],
      });

      console.log(firstDay, lastDay, totalBox, totalCols);
    } else {
      console.log("No Calendar data ", calendarData);
    }
  }, [calendarData])
  

  const renderEmptyBoxes = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <div key={`empty-${index}`} className="date-box" ></div>
    ));
  };


  return (
    <div className='calendar' style={styles}>
      <div className="date-container">
        {renderEmptyBoxes(preDateBoxes)}

        {calendarData.map((calendarObj, index) => (
        <div 
          key={`date-${index}`} 
          className="date-box" 
          style={{backgroundColor: colorLevels[calendarObj.level]}}
          >
          <span>{calendarObj.date}</span>
        </div>
        ))}

        {renderEmptyBoxes(postDateBoxes)}
      </div>

      <div className="col-label">

      </div>

      <div className="row-label">
        {dateNames.map((dateName, index) => (
        <div key={index} >
          <pre>{dateName}</pre>
        </div>
        ))}
      </div>

      <div className="status-bar">
        <span>
          {totalActivity} activities in the last year
        </span>
        <div className="level-bar">
          <span>Less</span>
          {colorLevels.map((colorLevel, index) => (
          <div
            key={index}
            className="level-box"
            style={{ backgroundColor: colorLevel }}
          />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  )
}

export default Calendar