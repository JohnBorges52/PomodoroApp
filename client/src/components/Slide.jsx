import classNames from 'classnames';
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/timer.scss'
import styled from 'styled-components'
import {Slider} from './Slider'

export const Slide = (props) => {  





  return (
    <div className='slider-container'>
    <div className='change-here'>
      <span>Slide here to change the time.</span>
      <button onClick={()=> console.log()}> TEST</button>
    </div>

    <div className="selector-bar">

      <Slider
      value={props.minute}
      type="range" 
       >

      </Slider>

      {/* <input
      id="input-slide" 
      type="range" 
      min="20"
      max="50" 
      defaultValue={"25"}
      step="5"
      value={props.minute}
      onChange={props.onChange} 
      time={props.time}
  
    
      /> */}
   
      
    <span className="input-value" id="test">
      {props.time}
    </span>


    </div>

      </div>
);

}