import { useState } from 'react'
import '../styles/timer.scss'


export const ShowPomodoro = (props) => {

   
  return (
    <div className='timer--container' >
      <span className='span-type'>FOCUS</span>    {/* mudar de acordo com o tempo*/}
      <div className='div--timer'>
      <span>{props.minutes} </span>
      <span>:</span>
      <span>{props.seconds} </span>
      </div>
      <div className='div-pomodoro-gif'>

      </div>
      <div className='div--timer--btns'>
        <div className='div-btns'>
        <button className='primary' onClick={props.onClick}>
          START
        </button>
        <button className='secondary'>STOP</button>
      </div>
        </div>
        <div className="selector-bar">
            <input 
              id="input-slide" 
              type="range" 
              min="20"
              max="50" 
              step="5"
              value={props.minute}
              onChange={props.onChange}        
            />
             <span className="input-value">
              {props.time}
            </span>
          

          </div>
       
    </div>

  )

}