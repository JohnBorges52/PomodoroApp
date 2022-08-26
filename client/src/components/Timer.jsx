import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'
import { useCountdown } from '../hooks/useCountdown'




export const Timer = ({targetDate}) => {
  const [minutes, seconds] = useCountdown(targetDate);
  
  const calcTime = () => {
    const tweentyFiveMinutes = 60 * 25 * 1000
    const now = new Date().getTime();
    const difference = now + tweentyFiveMinutes;
    console.log('timer has been clicked')

      return difference
  }

  // if (minutes + seconds <= 0) {
  //   return <ShowBreak />

  // } else {
    return (
      <ShowPomodoro 
        minutes={minutes}
        seconds={seconds}
        targetDate={()=>{calcTime()}}
        
      />
    );
  // }
}