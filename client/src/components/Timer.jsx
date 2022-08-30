import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'
import { Slide } from './Slide'
import '../styles/timer.scss'


export const Timer = () => {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(25)
  const [start, setStart] = useState(false)
  const [type, setType] = useState("pomodoro")

  const handleChange = (e) => {
    setMinute(e)
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
        
      }, 10)
      
      if (minute === 0 && second === 0 ) {
        console.log('ACABOU TUDO')
        clearTimeout(interval)
        
        setMinute(25)
        setSecond(0)
        setStart(false)
        setType('break')
        console.log(type)
      }
   
    }
    return (
      <div className='timer--container' >
      {type === "pomodoro" ? 
      
      <>

      <ShowPomodoro 
      minutes={minute}
      seconds={second}
      onClick={() => (setStart(true), console.log(type))} 
      />
      <Slide 
      value={minute} 
      onChange={(e) => {
        handleChange(e.target.value)}}
        time={minute}
      /> 

      </>  
      :
      <ShowBreak 
      minutes={minute}
      seconds={second}
      onClick={()=>{setType("pomodoro")}}
      
      />}
    </div>
      

      );
  }