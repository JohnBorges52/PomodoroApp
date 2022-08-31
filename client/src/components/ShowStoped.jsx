import { Gif } from "./Gif"
export const ShowStoped = (props) => {


  return (
    <>
    
      <span className="span-type">{props.title}</span>
      <span className="span-type">{props.message}</span>
      <div className='div--timer'>
      
      </div>
      <Gif 
      class={"div-stoped-gif"}
       
       />
      <div className='div--timer--btns'>
        <button className="primary" onClick={props.onClick}>
          ONE MORE
        </button>

      </div>
    
    </>


  )
}