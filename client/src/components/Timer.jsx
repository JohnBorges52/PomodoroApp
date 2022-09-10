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
import axios from 'axios'




export const Timer = () => {

  
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(25)
  const [start, setStart] = useState(false)
  const [type, setType] = useState("startPage")
  const [isHappening, setIsHappening] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  const [duration, setDuration] = useState(0)
  const [userId, setUserId] = useState(0)

  useEffect(()=> {
    findUserId()
  },[])

  const findUserId = () => {
    const loggedInUser = localStorage.getItem("user");
    const parseUser = JSON.parse(loggedInUser)
    if (parseUser) {
      setUserId(parseUser.id)
    } else {
      setUserId(0)
    }
    return
  }

  const sendNewPomodoro = () => {
    if (userId !== 0) {
      axios.post("/pomodoros/newpomodoro", {userId, duration})
      .then(res => res.data)
    }
  }

  const playFunc = (music) => {
    new Audio(music).play()
  }

  const handleChange = (e) => {
    setMinute(e)
  }

  if(start) {
      
  const interval = setTimeout(() => {
        
    if (second > 0 )  {
      setSecond(second - 1)
    }
    if (second === 0 && isHappening === true ) {
      setMinute(minute - 1)
      setSecond(59)
    }
        
  }, 1000)
      
      if (minute === 0 && second === 0 ) {
        console.log('ACABOU TUDO')
        clearTimeout(interval)
        playFunc(sound_one)
        setMinute(25)
        setSecond(0)
        setStart(false)
        setType('break')

      }
      // SEND POMODORO AFTER COMPLETED AT LEAST 17 MINUTES OF IT
      if (minute === 2 && second === 59) {
        sendNewPomodoro()
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
      onCancel={()=> {setConfirmation(false); setStart(true)}}
      onConfirm={()=> {setDuration(0); setConfirmation(false); setType("stoped"); setIsHappening(false); setStart(false); setMinute(25); setSecond(0) }}
      />} 
      <div className={variableClass}>
        <>
        <button onClick={() => {console.log(userId, "duration:",  duration )}}> TEST</button>

        {type === "startPage" && 
        <>
        <ShowPomodoro 
        minutes={minute}
        seconds={second}
        onClick={() => {setDuration(minute); console.log("clicked on the start", "minutes:", minute);  setStart(true); setIsHappening(true); setType("pomodoro") }} 
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
        onClick={()=> {setType("startPage"); setIsHappening(false); }}
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
