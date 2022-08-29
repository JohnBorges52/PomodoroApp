import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'

export const Timer = () => {

  const [time, setTime] = useState(25)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(time)
  const [start, setStart] = useState(false)
  const [type, setType] = useState("pomodoro")


  const handleChange = (e) => {
    setTime(e)
  }




    if(start === true ) {

      const interval = setTimeout(()=>{
        
        if (second > 0 )  {
          setSecond(second - 1)
        }
        if (second === 0 ) {
          setMinute(minute - 1)
          setSecond(59)
        }
        
      }, 20)
      
      if (minute === 0 && second === 0 ) {
        console.log('ACABOU TUDO')
        clearTimeout(interval)
        setTime(25)
        setMinute(time)
        setSecond(0)
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
      onClick={() => (setStart(true), console.log(type))}
      value={time} 
      onChange={(e) => {
        handleChange(e.target.value)}}
        time={time}
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