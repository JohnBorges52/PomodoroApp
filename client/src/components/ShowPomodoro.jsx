import { useState } from 'react'
import { useCountdown } from '../hooks/useCountdown'
import '../styles/timer.scss'
import DateTimeDisplay from './DateTimeDisplay'


export const ShowPomodoro = (props) => {

    
  
  return (
    <div className='timer--container' >
      <span>POMODORO</span>
      <div className='div--timer'>
      <p>{props.minutes} </p>
      <p>:</p>
      <p>{props.seconds} </p>
      </div>
      <div className='div--timer--btns'>
        <button onClick={props.onClick}>
          START
        </button>
        <button>STOP</button>
      </div>
    </div>

  )

}