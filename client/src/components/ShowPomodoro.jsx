import '../styles/timer.scss'
import DateTimeDisplay from './DateTimeDisplay'


export const ShowPomodoro = ({minutes, seconds}) => {

  return (
    <div className='timer--container' >
      <DateTimeDisplay value={minutes} />
      <p>:</p>
      <DateTimeDisplay value={seconds} />
    </div>

  )

}