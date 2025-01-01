import { useState } from 'react'
import Calendar from './Calendar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>DevCalendar</h1>
      <Calendar />
    </>
  )
}

export default App
