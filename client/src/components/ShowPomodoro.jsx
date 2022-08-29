import { useState } from 'react'
import '../styles/timer.scss'


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
       
       <br />
        <div className="selector-bar">
            <input 
              id="input-slide" 
              type="range" 
              min="20"
              max="50" 
              step="5"
              value={props.time}
              onChange={props.onChange}
                
                
              
            />
             <span className="input-value">
              {props.time}
            </span>
          

          </div>
       
      </div>
    </div>

  )

}