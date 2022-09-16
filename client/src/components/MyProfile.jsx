import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import "../styles/myprofile.scss"
import { BigSticker } from "./BigSticker"
import { BigStickerLocked } from "./BigStickerLocked"


export const MyProfile = (props) => {
  
  // STATES //
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(); // show the number of pomodoros Done //
  const [allStickers, setAllStickers] = useState([]); // get all the stickers from the db //
  const [currentSticker, setCurrentSticker] = useState(); // set the sticker selected in my profile page // 
  const [openDiv, setOpenDiv] = useState(false); // set to true to open a pop up div with the sticker information //
  const [openLockedDiv, setOpenLockedDiv] = useState(false); //set to true to open the div with the locked sticker //

  const loggedinUser = localStorage.getItem("user")
  const data = JSON.parse(loggedinUser)
  const userID = data.id
  
  useEffect(() => {
    fecthAllStickers();
    fetchNumOfPomodoros();
  },[])

  const fetchNumOfPomodoros = () => {
    axios.post("/pomodoros/mypomodoros", {userID})
    .then(res => {setNumberOfPomodoros(res.data[0].exact_count)})
  }
  
  const fecthAllStickers = () => {
    axios.get("/stickers")
    .then(res => { setAllStickers(res.data) ; console.log("allStickers:", res.data) })
  }
  
  const mapStickersInformation = (allStickers, currentStickerId) => {
    let result = 0
    allStickers.map((e)=>{
      if(currentStickerId === e.id){
        result = [e.stickerpic, e.title, e.id]
      }
    })
    return result
  }

  return (
    <>
    <div className="my-profile-main-container">
      {openDiv && <BigSticker img={mapStickersInformation(allStickers, currentSticker)[0]} title={mapStickersInformation(allStickers, currentSticker)[1]} msg={`You have won Sticker after ${mapStickersInformation(allStickers, currentSticker)[2]} completed pomodoros. `} close={()=> setOpenDiv(false)}/>}
      
      {openLockedDiv && <BigStickerLocked img={mapStickersInformation(allStickers, currentSticker)[0]} title={mapStickersInformation(allStickers, currentSticker)[1]} msg={`You can win this sticker after ${mapStickersInformation(allStickers, currentSticker)[2]} completed pomodoros. `} close={()=> setOpenLockedDiv(false)}/>}
      
      <div className="my-profile-span-wrapper">
      <div className="myprofile-span">
        <span > Welcome to your page <span className="myprofile-span-bolder">{data.username}</span>. </span>
      </div>
     
      <div className="myprofile-span">
        <span className="span--little" > You have this account since {data.created_at.substring(5,10)}-{data.created_at.substring(0,4)}.</span>
      </div>

      <div className="myprofile-span">
        <span>You have done <span className="span--bold"> {numberOfPomodoros}</span> pomodoros so far. </span>
      </div>

      </div>
        <div className="my-stickers-tittle"> My Stickers</div>
      <div className="my-stickers-container">
        {(allStickers.map((element) => {
          if (element.id <= numberOfPomodoros) {
              return ( 
              <div key={element.id} className="mytrophies" >
                <img className="sticker-img" alt={`${element.title}`} onClick={()=> {setCurrentSticker(element.id); setOpenDiv(true)}} src={`${element.stickerpic}`} />
              </div>)} 
          else {
            return ( 
            <div key={element.id} className="mytrophies" >
              <img className="sticker-img locked" alt={`${element.title}`} onClick={()=> {setCurrentSticker(element.id); setOpenLockedDiv(true)}}  src={`${element.stickerpic}`} />
            </div>)}
        }))}
      </div>
    </div>
    </>
  )
}