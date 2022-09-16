import { useEffect } from "react"
import { useState } from "react"
import { Gif } from "./Gif"
import sound_two from "../assets/sound-3.mp3"
import classNames from 'classnames'

export const ShowBreak = (props) => {

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(5);

  const playFunc = (music) => {
    new Audio(music).play()
  }

  useEffect(()=> {

    const interval = setTimeout(() => {
      if (second > 0) {
        setSecond(second -1)
      }
      if (second === 0 ) {
        setMinute(minute - 1)
        setSecond(59)
      }
    }, 1000)

    if (minute === 0 && second === 0) {
      clearTimeout(interval)
      playFunc(sound_two)
    }
  }, [{second, minute}])

  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }
  const variableStyle = classNames('time-style', {
    "time-style-orange": minute <= 5 && minute >= 1,
    "time-style-red": minute < 1
  })
  
  return (
    <>
      <span className="span-type">YOU DESERVE A BREAK!</span>
      <div className='div--timer'>
        <span className={variableStyle}>{formatTime(minute)} </span>
        <span className={variableStyle}>:</span>
        <span className={variableStyle}>{formatTime(second)} </span>
      </div>
      <Gif 
      class={"div-break-gif"}
       />
      <div className='div--timer--btns'>
        <button className="primary" onClick={props.onClick}>
          ONE MORE
        </button>
      </div>
    </>
  )
}