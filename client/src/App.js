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
import axios from 'axios';
import { useState } from 'react';


function App() {

  // const [username,setUsername] = useState("")
  // const [ psw, setPsw] = useState("")
  // const [user, setUser] = useState("")

  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   const user = {username, psw};
  //   const response = await axios.post("/users/login", user
  //   );
  //   setUser(response.data)
  //   localStorage.setItem('user', response.data)
  //   console.log(response.data)
  // };

  return (
    <>
      <Router>

        <div className="App">
          <TopNavBar />
          <div className='main--container'>
            <Routes>
              <Route path="/" element={<Timer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users/register" element={<Register />} />


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
