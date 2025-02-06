import React from 'react';

const ColumnLabels = ({ calendarData, totalColumns, monthNames }) => {
  if (!calendarData.length) return null;

  let prevMonth = null;
  let count = 0;
  const labels = [];

  for (let index = 0; index < totalColumns; index++) {
    const weekStartIndex = index * 7;
    if (weekStartIndex >= calendarData.length) break;

    const monthNo = new Date(calendarData[weekStartIndex]?.date).getMonth();

    if (monthNo !== prevMonth) {
      if (prevMonth !== null) {
        labels.push(
          <div key={`month-${prevMonth}`} style={{ flexBasis: `calc((100% / ${totalColumns}) * ${count})` }}>
            {monthNames[prevMonth]}
          </div>
        );
      }
      prevMonth = monthNo;
      count = 0;
    }
    count++;

    if (index + 1 === totalColumns) {
      labels.push(
        <div key={`month-${prevMonth}`} style={{ flexBasis: `calc((100% / ${totalColumns}) * ${count})` }}>
          {monthNames[prevMonth]}
        </div>
      );
    }
  }

  return <div className="col-label">{labels}</div>;
};

export default ColumnLabels;
