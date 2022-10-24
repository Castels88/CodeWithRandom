import '../CSS/Timer.css'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'

export function Timer() {
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  function resetCounter() {
    setSec(0)
    setMin(0)
    setHour(0)
  }

  return (
    <div className="T-container">
      <div className="button">
        <Button onClick={resetCounter} className="m-2" variant="danger">
          Reset
        </Button>
        <Button className="m-2" variant="success">
          Start
        </Button>
        <Button className="m-2" variant="warning">
          Pause Timer
        </Button>
      </div>

      <div className="time">
        <div className="hour">{hour}:</div>
        <div className="minute">{min}:</div>
        <div className="sec">{sec}</div>
      </div>
    </div>
  )
}
