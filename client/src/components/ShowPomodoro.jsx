import { useState } from 'react'
import '../styles/timer.scss'
import DateTimeDisplay from './DateTimeDisplay'


export const ShowPomodoro = ({minutes,seconds, changeTime}) => {

  
  return (
    <div className='timer--container' >
      <div className='div--timer'>
      <DateTimeDisplay value={minutes} />
      <p>:</p>
      <DateTimeDisplay value={seconds} />
      </div>
      <div className='div--timer--btns'>
        <button 
        onClick={() => changeTime}
        >
          START
        </button>
        <button>STOP</button>
      </div>
    </div>

  )

}