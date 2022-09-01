import './App.css';
import './styles/style.scss'
import './styles/popup.scss'
import classNames from "classnames";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// COMPONENTS // 
import { TopNavBar } from './components/TopNavBar';
import { BottomNavBar } from './components/BottomNavBar';
import { Timer } from './components/Timer';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {



  return (
    <>
      <Router>

        <div className="App">
          <TopNavBar />
          <div className='main--container'>
            <Routes>
              <Route path="/" element={<Timer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />


            </Routes>
          </div>
          <BottomNavBar />
        </div>
        {/* ROUTES */}






      </Router>
    </>

  );
}

export default App;
