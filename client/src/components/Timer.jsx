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
import { PomodoroButtons } from './PomodoroButtons'
import { Slider } from './Slider'


export const Timer = () => {
   
  //// define the amount of time the user chooses //
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(25)

  /// set the state to true in order to start the countdown ///
  const [start, setStart] = useState(false)

  /// set the type to change the gif and the slider in the page ///
  const [type, setType] = useState("startPage")
  const [isHappening, setIsHappening] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  /// set the information to be sent to the db ///
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
  if (start) {
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
          {type === "startPage" && 
            <>
              <ShowPomodoro 
                minutes={minute}
                seconds={second}
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
                /> }

              <PomodoroButtons onClick={() => {setDuration(minute);  setStart(true); setIsHappening(true); setType("pomodoro")}} 
                onClose={()=> (alert('You need to start first before stoping!'))} show={true} />
            </>
          }
          {type === "pomodoro" && 
            <>
              <ShowPomodoro 
                minutes={minute}
                seconds={second}
                class={'div-pomodoro-gif'}
                message={"ITS GOING TO END IN"}
                timeStyle={variableStyle}
              />
              <PomodoroButtons onClick={() => (setStart(true), setIsHappening(true))} 
              onClose={()=> (setConfirmation(true), setStart(false))} message={true}/>
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
            title={"IT'S OK"}
            message={'Next Time you got this!'}
            class={'div-stoped-gif'}
          />
          }
        </>
      </div>
    </div>
  );
}
