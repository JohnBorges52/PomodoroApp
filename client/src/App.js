import './App.css';
import './styles/style.scss'

// COMPONENTS // 
import { TopNavBar } from './components/TopNavBar';
import { BottomNavBar } from './components/BottomNavBar';
import { Timer } from './components/Timer';


function App() {

  const fiveseconds = 60 * 5 * 1000
  const now = new Date().getTime();

  const difference = now + fiveseconds;

  return (
    <div className="App">
      <TopNavBar />
      <div className='main--container'>
        <Timer targetDate={difference} />

      </div>
      <BottomNavBar />
    </div>
  );
}

export default App;
