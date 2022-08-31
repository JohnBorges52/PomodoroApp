import { useState } from 'react'
import '../styles/timer.scss'
import { Slide } from './Slide'


export const ShowPomodoro = (props) => {

   
  return (
      <>
      <span className='span-type'>{props.message}</span>    {/* mudar de acordo com o tempo*/}
      <div className='div--timer'>
      <span>{props.minutes} </span>
      <span>:</span>
      <span>{props.seconds} </span>
      </div>
      <div className={props.class}>

      </div>
      <div className='div--timer--btns'>
        <div className='div-btns'>
        <button className='primary' onClick={props.onClick}>
          START
        </button>
        <button className='secondary' onClick={props.onClose}>STOP</button>
      </div>
        </div>

      </>
  
       
   

  )

}