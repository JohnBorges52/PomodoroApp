import '../styles/timer.scss'

export const Slide = (props) => {


  return (
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
);

}