import '../styles/top-nav-bar.scss'


export const TopNavBar = () => {

  return (
    <div className="top--nav">
      <ul>
        <div className='div--logo'>
          <li><a hredf="#">
          LOGO
          </a> </li>
        </div>
        <div className='div--right'>
        <li><a hredf="#">LOGIN</a></li>
        <li><a hredf="#">REGISTER</a></li>
        </div>
      </ul>
    </div>
  )
}