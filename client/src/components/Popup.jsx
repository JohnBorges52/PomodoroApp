import '../styles/popup.scss'
export const Popup = (props) => {



  return(
    <>  
      <div className="confirmation-box">
        <span className='popup-close-span' onClick={props.onCancel}>X</span>
        <div className='messages-wrapper'>
        <span className='confirmation-title'>{props.title}</span>
        <span className='confirmation-message'>{props.message} </span>
        <button className='popup-confirmation-btn' onClick={props.onConfirm}>YES</button>
        </div>
     
      </div>
    </>

  );


}