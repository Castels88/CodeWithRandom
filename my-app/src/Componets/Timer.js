import '../CSS/Timer.css'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'

export function Timer({ inizialValue = 0 }) {
  const [hour, setHour] = useState(inizialValue)
  const [min, setMin] = useState(inizialValue)
  const [sec, setSec] = useState(inizialValue)

  //   useEffect(() => {
  //     if (() => 0) {
  //       setTimeout(() => setSec(sec + 1), 1000)
  //     }
  //   }, [sec])

  function resetCounter() {
    setSec(inizialValue)
    setMin(inizialValue)
    setHour(inizialValue)
  }
  function PauseCounter() {
    clearInterval(setSec)
    clearInterval(setMin)
    clearInterval(setHour)
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
        <Button onClick={PauseCounter} className="m-2" variant="warning">
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
