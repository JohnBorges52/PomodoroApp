import '../styles/timer.scss'

export const PomodoroButtons = (props) => {


  return (
    <div className='div--timer--btns'>
          {props.message && <span className='stop-pomodoro-msg'> Clique here to stop.</span>}
        <div className='div-btns'>
        {props.show && <button className='primary' onClick={props.onClick}>
          START
        </button> }
        <button className='secondary' onClick={props.onClose}>STOP</button>
      </div>
        </div>
  )
}