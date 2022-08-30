import { useEffect } from "react"
import { useState } from "react"

export const ShowBreak = (props) => {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(1)  
  useEffect(()=> {

    const interval = setTimeout(() => {
      
      if (second > 0) {
        setSecond(second -1)

      }
      if (second === 0 ) {
        setMinute(minute - 1)
        setSecond(59)
      }
    }, 300)

    
    if (minute === 0 && second === 0) {
      console.log("ACABOU BREAK")
      clearTimeout(interval)
    }
    
  }, [{second, minute}])
  
  return (
    <div className='timer--container' >
      <span className="span-type">Enjoy your break!!</span>
      
      <div className='div--timer'>
      <span>{minute} </span>
      <span>:</span>
      <span>{second} </span>
      </div>
      <div className="div-break-gif" > </div>
      <div className='div--timer--btns'>
        <button className="primary" onClick={props.onClick}>
          ONE MORE
        </button>

      </div>
    </div>


  )
}