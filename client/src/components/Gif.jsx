import'../styles/timer.scss'
import classNames from 'classnames'


export const Gif = (props) => {

  const variableClass = classNames("div-gif", {
    "div-gif-start": props.isStart,
    "div-gif-pomodoro": props.isPomodoro,
    "div-gif-break": props.isBreak
   })

  return (
    <div className={props.class}>

    </div>
  )

}