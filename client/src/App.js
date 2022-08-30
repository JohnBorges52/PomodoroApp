import './App.css';
import './styles/style.scss'
import './styles/popup.scss'
import classNames from "classnames";

// COMPONENTS // 
import { TopNavBar } from './components/TopNavBar';
import { BottomNavBar } from './components/BottomNavBar';
import { Timer } from './components/Timer';



function App() {



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
