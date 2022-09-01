import '../styles/top-nav-bar.scss'


export const TopNavBar = () => {

  return (
    <div className="top--nav">
      <ul>
        <div className='div--logo'>
          <li><a href="/">
          POMODORO
          </a> </li>
        </div>
        <div className='div--right'>
        <li><a href="/login">LOGIN</a></li>
 
        </div>
      </ul>
    </div>
  )
}