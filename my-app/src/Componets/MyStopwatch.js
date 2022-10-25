import React from 'react'
import { useStopwatch } from 'react-timer-hook'
import Button from 'react-bootstrap/Button'

export function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true })

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <Button className="m-2" variant="success" onClick={start}>
        Start
      </Button>
      <Button className="m-2" variant="warning" onClick={pause}>
        Pause
      </Button>
      <Button className="m-2" variant="danger" onClick={reset}>
        Reset
      </Button>
    </div>
  )
}
