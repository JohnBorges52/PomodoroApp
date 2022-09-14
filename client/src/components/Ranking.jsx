import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import '../styles/ranking.scss'


export const Ranking = () => {
  
  const [topUsers, setTopUsers] = useState([])





  const fecthTopUsers =  () => {
    axios.get('pomodoros/ranking')
    .then(res=>{setTopUsers(res.data)
    })

  }
  useEffect(()=>{
    fecthTopUsers();
  },[])
  


  return (
    <div className="ranking-component">
      <div className="ranking-title">Here is the list of the top users!</div>
      
      <div className="ranking-wrapper">
      <div className="ranking-subtitle"> 

      <div className="no-place"> </div>

      <div className="general-username">
        Username
      </div>
     <div className="general-totaltime">Minutes</div>
     </div>
        {(topUsers.map((element) => {

          if (topUsers.indexOf(element) === 0 ) {
            return (
              <div className="map-wrapper">  
                <div className="first-place"> </div>
                <div className="top-username-1">{element.username.substring(0,14)}</div>
                <div className="top-totaltime">{element.total_time}</div>
         
              </div>
            
            )
          } else if (topUsers.indexOf(element) === 1) {
            return (
              <div className="map-wrapper">  
              
              <div className="second-place"> </div>
                <div className="top-username-2">{element.username.substring(0,14)}</div>
                <div className="top-totaltime">{element.total_time}</div>
         
              </div>
            
            )
          } else if (topUsers.indexOf(element) === 2) {
            return (
              <div className="map-wrapper">  
              <div className="third-place"> </div>
                <div className="top-username-3">{element.username.substring(0,14)}</div>
                <div className="top-totaltime">{element.total_time}</div>
         
              </div>
            
            )
          }
          
            return (
              <div className="map-wrapper">  
              
              
              <div className="no-place"> </div>
                <div className="top-username">{element.username.substring(0,18)}</div>
                <div className="top-totaltime">{element.total_time}</div>
              

              
              </div>
            
  
           
            )

        }))}
        
        

      </div>
    </div>

  )
}