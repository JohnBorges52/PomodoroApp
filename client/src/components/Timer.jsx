import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'
import { useCountdown } from '../hooks/useCountdown'
import { useEffect } from 'react'




export const Timer = () => {



  const [minute, setMinute] = useState(1)
  const [second, setSecond] = useState(11)


  useEffect(()=>{

    const interval= setTimeout(()=>{
      
      if (second > 0 )  {
        setSecond(second - 1)
      }
      if (second === 0 ) {
        setMinute(minute - 1)
        setSecond(11)
      }
      
    },500)


    if (minute === 0 && second === 0 ) {
      console.log('ACABOU TUDO')
      clearTimeout(interval)
    }


  },[{minute, second}])



  // if (minutes + seconds <= 0) {
  //   return <ShowBreak />

  // } else {
    return (
      <ShowPomodoro 
        minutes={minute}
        seconds={second}
        onClick={()=>{console.log('hey')}}
        
        
      />
    );
  // }
}