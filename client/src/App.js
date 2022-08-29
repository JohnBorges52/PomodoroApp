import './App.css';
import './styles/style.scss'

// COMPONENTS // 
import { TopNavBar } from './components/TopNavBar';
import { BottomNavBar } from './components/BottomNavBar';
import { Timer } from './components/Timer';
import { useState } from 'react';


function App() {

  const [time, setTime] = useState(0)


  return (
    <div className="App">
      <TopNavBar />
      <div className='main--container'>

        <Timer


        />

      </div>
      <BottomNavBar />
    </div>
  );
}

export default App;
