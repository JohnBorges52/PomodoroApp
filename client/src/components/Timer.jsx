import { useState } from 'react'
import { ShowPomodoro } from './ShowPomodoro'
import { ShowBreak } from './ShowBreak'
import { Slide } from './Slide'
import '../styles/timer.scss'
import { Popup } from './Popup'
import classNames from 'classnames'
import { useEffect } from 'react'
import sound_one from "../assets/sound-2.mp3";
import { ShowStoped } from './ShowStoped'



export const Timer = () => {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(25)
  const [start, setStart] = useState(false)
  const [type, setType] = useState("startPage")
  const [isHappening, setIsHappening] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
  
  

  const playFunc = (music) => {
    new Audio(music).play()
  }

  const handleChange = (e) => {
    setMinute(e)
  }

      if(start === true ) {
      
      const interval = setTimeout(()=>{
        
        if (second > 0 )  {
          setSecond(second - 1)
        }
        if (second === 0 && isHappening === true ) {
          setMinute(minute - 1)
          setSecond(59)
        }
        
      }, 10)
      
      if (minute === 0 && second === 0 ) {
        console.log('ACABOU TUDO')
        clearTimeout(interval)
        playFunc(sound_one)
        setMinute(25)
        setSecond(0)
        setStart(false)
        setType('break')
      }
    }

    const variableClass = classNames("timer--container", {
     "opacity-bg": confirmation
    })

    const variableStyle = classNames('time-style', {
      "time-style-orange": minute <= 5 && minute >= 1,
      "time-style-red": minute < 1
    })

 
  

    

    return (
      <div className='timer-component-container'>

      
      {confirmation && 
      <Popup
      title={"Do you really wanna stop?"}
      message={"Your progress will not be counted if you don't stay at least for 90% of the time."}
      onCancel={()=> (setConfirmation(false), setStart(true))}
      onConfirm={()=> ( setConfirmation(false), setType("stoped"),setIsHappening(false), setStart(false), setMinute(25), setSecond(0) )}
      />} 
      <div className={variableClass}>
        <>

        {type === "startPage" && 
        <>
        <ShowPomodoro 
        minutes={minute}
        seconds={second}
        onClick={() => (setStart(true), setIsHappening(true), setType("pomodoro"))} 
        onClose={()=> (alert('You did not start!'))}
        message={"LET'S FOCUS!"}
        class={'div-start-gif'}
        timeStyle={variableStyle}
        />

        {!isHappening &&
        <Slide 
        value={minute} 
        onChange={(e) => {
          handleChange(e.target.value)}}
          time={minute}
          /> 
        }
        </>
        
      }
        {type === "pomodoro" && 
        <>
        <ShowPomodoro 
        minutes={minute}
        seconds={second}
        onClick={() => (setStart(true), setIsHappening(true))} 
        onClose={()=> (setConfirmation(true), setStart(false))}
        class={'div-pomodoro-gif'}
        message={"ITS GOING TO END IN"}
        timeStyle={variableStyle}
        />
     
        {!isHappening &&
        <Slide 
        value={minute} 
        onChange={(e) => {
          handleChange(e.target.value)}}
          time={minute}
          /> 
        }
        </>  
        
      }
      {type === "break" &&
        <ShowBreak 
        minutes={minute}
        seconds={second}
        onClick={()=> (setType("startPage"), setIsHappening(false))}
        class={'div-break-gif'}
        
        />
      }

      {type === "stoped" && 
      <ShowStoped 
      onClick={()=> (setType("startPage"), setIsHappening(false))} 
      title={'ITS OK!'}
      message={'Next Time you got this!'}
      class={'div-stoped-gif'}
      />

      }
        
        </>
        
        
       
      </div>
      </div>
      
      );
    }