import '../styles/about.scss'

export const About = () => {


  return (
<div className="about-wrapper">

  <div className="about-title">
    Welcome to the Pomodoro App
  </div>
  <div className="about-about"> This is a personal project made to help people focus on their tasks with some anime touch.</div>
  
  <div className='howtouse-wrapper'>

  <div className="about-subtitle">
    How to use it
  </div>

<div className="about-list">
  <ul>

  <li>Decide on the task to be done. </li>
  <li>Set the Pomodoro timer by using the slide bar. </li>
  <li>Work on the task without losing focus.</li>
  <li>When the bell rings, stop working and take a break.</li>
  <li>In order to count how many Pomodoros you have completed, make an account and log in.</li>
  <li>By completing Pomodoros you can win stickers as trophies.</li>
  </ul>

  </div>

<div className='about-creator'> *created by <span className='john'> <a href="https://github.com/JohnBorges52"> John Borges</a> *</span></div>
</div>


</div>

  );

}