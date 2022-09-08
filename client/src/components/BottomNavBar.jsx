import '../styles/bottom-nav.scss'

export const BottomNavBar = (props) => {



  return (
    <div className='bottom--nav'>
      <ul>
        <li><a href="https://github.com/JohnBorges52" target="_blank"> ABOUT</a></li>
        <li><a href={props.href} > MY PROFILE</a></li>
      </ul>
    </div>
  )

}