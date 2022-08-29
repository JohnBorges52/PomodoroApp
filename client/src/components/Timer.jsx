import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'

export const Timer = () => {

  const [second, setSecond] = useState(11)
  const [minute, setMinute] = useState(1)
  const [start, setStart] = useState(false)
  const [type, setType] = useState("pomodoro")

    if(start === true ) {

      const interval = setTimeout(()=>{
        
        if (second > 0 )  {
          setSecond(second - 1)
        }
        if (second === 0 ) {
          setMinute(minute - 1)
          setSecond(11)
        }
        
      }, 200)
      
      if (minute === 0 && second === 0 ) {
        console.log('ACABOU TUDO')
        clearTimeout(interval)
        setMinute(1)
        setSecond(11)
        setStart(false)
        setType('break')
        console.log(type)
      }
   
    }
    return (
      <>
      {type === "pomodoro" ? 
      <ShowPomodoro 
      minutes={minute}
      seconds={second}
      onClick={() => (setStart(true), console.log(type)) } 
      />
      :
      <ShowBreak 
      minutes={minute}
      seconds={second}
      onClick={()=>{setType("pomodoro")}}
 
      />}
      </>

      );
       
    
  }