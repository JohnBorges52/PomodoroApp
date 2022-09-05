import '../styles/top-nav-bar.scss'


export const TopNavBar = (props) => {

  return (
    <div className="top--nav">
      <ul>
        <div className='div--logo'>
          <li><a href="/">
          POMODORO
          </a> </li>
        </div>
        <div className='div--right'>
        <li><a onClick={props.onClick}>{props.loginMsg}</a></li>
 
        </div>
      </ul>
    </div>
  )
}