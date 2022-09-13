import axios from "axios"
import { useState } from "react"


export const Ranking = () => {
  
  const [topUsers, setTopUsers] = useState([])





  const fecthTopUsers =  () => {
      axios.get('pomodoros/ranking')
      .then(res=>{console.log(res.data)

      })
  }


  return (
    <div className="ranking-component">
      <div className="ranking-title">Here is the list of the top users!</div>
      
      <div className="ranking-wrapper">
        <button onClick={()=>{fecthTopUsers()}}>TEST</button>
        

      </div>
    </div>

  )
}