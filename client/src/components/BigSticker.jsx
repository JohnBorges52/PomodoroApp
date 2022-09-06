import "../styles/myprofile.scss"

export const BigSticker = (props) => {




  return (
    <div className="big-img-div">

    <img className="big-sticker-img"  src={`${props.img}`} />
   
    <div className="big-sticker-title">
    <span> {props.title} </span>
    </div>
    
    <div className="big-sticker-msg">
      <span>{props.msg} </span>
    </div>

    </div>
  )

}