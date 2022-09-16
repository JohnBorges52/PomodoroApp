import '../styles/timer.scss'
import {Slider} from './Slider'

export const Slide = (props) => {  

  return (
    <div className='slider-container'>
      <div className='change-here'>
        <span>Slide here to change the time.</span>
      </div>
      <div className="selector-bar">
        <Slider
          value={props.value}
          onChange={props.onChange} 
          time={props.time}
        />
        <span className="input-value" id="test">
          {props.time}
        </span>
      </div>
    </div>
  );
}