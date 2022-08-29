import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'
import { useCountdown } from '../hooks/useCountdown'
import { useEffect } from 'react'




export const Timer = () => {

  
  

  const [minute, setMinute] = useState(1)
  const [second, setSecond] = useState(11)
  const [start, setStart] = useState(false)

      if(start ===true ){

        const interval = setTimeout(()=>{
          
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
          setMinute(1)
          setSecond(11)
          setStart(false)
        }
      }
     
    
    
    return (
      <ShowPomodoro 
      minutes={minute}
      seconds={second}
      onClick={() => (setStart(true))} 
      />
      );
   
      
    }