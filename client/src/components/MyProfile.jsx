import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"



export const MyProfile = (props) => {
  const [numberOfPomodoros, setNumberOfPomodoros] = useState()

  const loggedinUser = localStorage.getItem("user")
  const data = JSON.parse(loggedinUser)
  const id = data.id

  useEffect(()=>{
    fetchInfo()
  },[])
  
  
  const fetchInfo = () => {
    axios.post("/pomodoros/mypomodoros", {id})
    .then(res => {setNumberOfPomodoros(res.data[0].exact_count)})

  }



  return (
    <div className='main--container'>
        <span> Welcome {data.username} </span>
        <span> You have this account since - {data.created_at.substring(5,10)}-{data.created_at.substring(0,4)}</span>
        
        <span>You have done: {numberOfPomodoros} pomodoros so far </span>

        <div className="mytrophies">

          

        </div>
    </div>
  )
}