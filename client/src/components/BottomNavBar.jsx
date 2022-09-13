import '../styles/bottom-nav.scss'

export const BottomNavBar = (props) => {



  return (
    <div className='bottom--nav'>
      <ul>
        <li><a href="/about"> ABOUT</a></li>
        <li><a href="ranking"> RANKING</a></li>
        <li><a href={props.href} > MY PROFILE</a></li>
      </ul>
    </div>
  )

}