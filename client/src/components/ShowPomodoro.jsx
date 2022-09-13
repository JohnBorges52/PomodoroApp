import { useState } from 'react'
import '../styles/timer.scss'
import { Slide } from './Slide'


export const ShowPomodoro = (props) => {

  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }
   
  return (
      <>
      <span className='span-type'>{props.message}</span>    {/* mudar de acordo com o tempo*/}
      <div className='div--timer'>
      <span className={props.timeStyle}>{formatTime(props.minutes)} </span>
      <span className={props.timeStyle}>:</span>
      <span className={props.timeStyle}>{formatTime(props.seconds)} </span>
      </div>
      <div className={props.class}>

      </div>
      

      </>
  
       
   

  )

}