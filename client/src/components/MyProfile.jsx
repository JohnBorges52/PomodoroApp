import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import "../styles/myprofile.scss"




export const MyProfile = (props) => {
  const [numberOfPomodoros, setNumberOfPomodoros] = useState()
  const [sticker, setSticker] = useState([])

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

  useEffect(()=>{
    fecthStickers()
  },[])

  const fecthStickers = () => {
    axios.get("/stickers/")
    .then(res => setSticker(res.data) )
  }


  return (
    <div className="my-profile-main-container">

        <span className="myprofile-span"> Welcome <span className="myprofile-span-bolder">{data.username}</span> </span>
        <span className="myprofile-span"> You have this account since - {data.created_at.substring(5,10)}-{data.created_at.substring(0,4)}</span>
        
        <span>You have done: {numberOfPomodoros} pomodoros so far </span>
<br />
        <span>MY STICKERS</span>
        <br />
      <div className="my-stickers-container">

        {(sticker.map((element) =>
         <div key={element.id} className="mytrophies" >
          <img className="sticker-img"  src={`${element.stickerpic}`} />
         </div>
          
          ))}
   
          </div>

    </div>
    
  )
}