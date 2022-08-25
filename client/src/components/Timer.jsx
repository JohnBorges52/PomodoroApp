import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'
import { useCountdown } from '../hooks/useCountdown'




export const Timer = ({targetDate}) => {

  const [isBreak, setIsBreak] = useState(false)
  const [isPomodoro, setIsPomodoro] = useState(false)

  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <ShowBreak />

  } else {
    return (
      <ShowPomodoro 
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}