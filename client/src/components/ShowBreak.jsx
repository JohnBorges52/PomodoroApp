import { useEffect } from "react"
import { useState } from "react"

export const ShowBreak = () => {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(5)
  
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
    

  }, [])





  return (
    <div>
      <span> Enjoy your break</span>
    </div>

  )
}