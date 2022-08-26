import { useState } from 'react'
import '../styles/timer.scss'
import DateTimeDisplay from './DateTimeDisplay'


export const ShowPomodoro = (props) => {


  
  return (
    <div className='timer--container' >
      <div className='div--timer'>
      <p>{props.minutes} </p>
      <p>:</p>
      <p>{props.seconds} </p>
      </div>
      <div className='div--timer--btns'>
        <button 
        onClick={() => props.startTime}
        >
          START
        </button>
        <button>STOP</button>
      </div>
    </div>

  )

}