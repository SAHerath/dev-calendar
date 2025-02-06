import { useState } from 'react'
import Calendar from './Calendar';


function App() {
  const customColors = ['#ebedf0', '#5500ff', '#ff0055', '#30a14e', '#216e39'];
  const customDateNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthNames = ['Jan', ' ', 'Mar', '', 'May', '', 'Jul', '', 'Sep', '', 'Nov', ''];

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>DevCalendar</h1>
      <Calendar
        // colorLevels={customColors}
        // dateNames={customDateNames}
        // monthNames={monthNames}
      />
    </>
  )
}

export default App
