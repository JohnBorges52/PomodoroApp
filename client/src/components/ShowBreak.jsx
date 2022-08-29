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
      <span>Enjoy your break</span>
      <div className='div--timer'>
      <p>{minute} </p>
      <p>:</p>
      <p>{second} </p>
      </div>
      <div className='div--timer--btns'>
        <button onClick={props.onClick}>
          Another one
        </button>

      </div>
    </div>


  )
}