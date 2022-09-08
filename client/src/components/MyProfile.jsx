import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import "../styles/myprofile.scss"
import { BigSticker } from "./BigSticker"




export const MyProfile = (props) => {
  const [numberOfPomodoros, setNumberOfPomodoros] = useState()
  const [sticker, setSticker] = useState([])
 
  const [allStickers, setAllStickers] = useState([])
  
  const [stickerId, setStickerId] = useState(0)
  const [openDiv, setOpenDiv] = useState(false)


  const loggedinUser = localStorage.getItem("user")
  const data = JSON.parse(loggedinUser)
  const userID = data.id

 

  useEffect(()=>{
    fetchInfo()
  },[])
  
  
  const fetchInfo = () => {
    axios.post("/pomodoros/mypomodoros", {userID})
    .then(res => {setNumberOfPomodoros(res.data[0].exact_count)})

  }

  useEffect(() => {
    fecthAllStickers();
    fecthStickers();
    // showAllStickers(allStickers,sticker);

  },[])

  const fecthStickers = () => {
    axios.post("/user_stickers/mystickers", {userID})
    .then(res => setSticker(res.data) )
  }
  const fecthAllStickers = () => {
    axios.get("/stickers")
    .then(res => setAllStickers(res.data) )
  }

  const mapStickersId = (stickerNumber) => {
    let result = ''
    sticker.map((element) => {
      if (element.id === stickerNumber) {
        result = element.stickerpic
      }
    })
    return result
  }

  
  const mapStickersTitle = (stickerNumber) => {
    let result = ''
    sticker.map((element) => {
      if (element.id === stickerNumber) {
        result = element.title
      }
    })
    return result
  }

  const showAllStickers = (state, myStickerArray) => {
    let idArray = []
    let result = []
    myStickerArray.map(e => {
      return idArray.push(e.id)
    })

    state.map((element) => {
      if(!idArray.includes(element.id)){
        return result.push(element)
             
    } 
})
  return result
}

const allStickersPossible = showAllStickers(allStickers, sticker)






  return (
    <>
    <div className="my-profile-main-container">
      {openDiv && <BigSticker img={mapStickersId(stickerId)} title={mapStickersTitle(stickerId)} msg={`You can win this sticker after ${stickerId} completed pomodoros. `} close={()=> setOpenDiv(false)}/>}

      <div className="myprofile-span">
        <span > Welcome to your page <span className="myprofile-span-bolder">{data.username}</span>. </span>
      </div>
     
      <div className="myprofile-span">
        <span className="span--little" > You have this account since {data.created_at.substring(5,10)}-{data.created_at.substring(0,4)}.</span>
      </div>

      <div className="myprofile-span">
        <span>You have done <span className="span--bold"> {numberOfPomodoros}</span> pomodoros so far. </span>
      </div>
        <div className="my-stickers-tittle">

        <span>MY STICKERS</span>
        <button onClick={()=>{console.log("HERE::", showAllStickers(allStickers,sticker))}}>TEST</button>
        </div>
        
      <div className="my-stickers-container">

        {(sticker.map((element) => {
         
         return <div key={element.id} className="mytrophies" >
          <img className="sticker-img" alt={`${element.title}`} onClick={()=> {setStickerId(element.id); setOpenDiv(true); console.log(sticker)}}  src={`${element.stickerpic}`} />
         </div>
        }))}

        {allStickersPossible.map(e=>{
          return <div key={e.id} className="mytrophies" >
          <img className="sticker-img" alt={`${e.title}`} onClick={()=> {setStickerId(e.id); setOpenDiv(true); console.log(sticker)}}  src={`${e.stickerpic}`} />
         </div>
        })}
        



      </div>


    </div>
    
    </>
  )
}