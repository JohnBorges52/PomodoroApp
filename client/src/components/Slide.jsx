import '../styles/timer.scss'

export const Slide = (props) => {


  return (
    <div className='slider-container'>
    <div className='change-here'>
      <span>Slide here to change the time.</span>
  </div>
    <div className="selector-bar">
      <input 
      id="input-slide" 
      type="range" 
      min="20"
      max="50" 
      defaultValue={"25"}
      step="5"
      value={props.minute}
      onChange={props.onChange}        
      />
    <span className="input-value">
      {props.time}
    </span>


    </div>

      </div>
);

}