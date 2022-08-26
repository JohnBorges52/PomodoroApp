import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'
import { useCountdown } from '../hooks/useCountdown'
import { useEffect } from 'react'




export const Timer = (props) => {
  
  const tweentyFiveMinutes = 60 * 25 * 1000
  const now = new Date().getTime();

  const minutes = Math.floor((tweentyFiveMinutes % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((tweentyFiveMinutes % (1000 * 60)) / 1000);

  const [ready, setReady] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setReady(tweentyFiveMinutes - now);
    }, 1000);

    return () => clearInterval(interval);
  }, [tweentyFiveMinutes]);




  // if (minutes + seconds <= 0) {
  //   return <ShowBreak />

  // } else {
    return (
      <ShowPomodoro 
        minutes={minutes}
        seconds={seconds}
        startTime={console.log("ha")}
        
        
      />
    );
  // }
}