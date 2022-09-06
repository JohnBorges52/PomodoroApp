import "../styles/myprofile.scss"

export const BigSticker = (props) => {




  return (
    <div className="big-img-div">

    <img className="big-sticker-img"  src={`${props.img}`} />

    </div>
  )

}