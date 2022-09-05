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
import { useEffect } from 'react';


function App() {

  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState('')
  const [user, setUser] = useState("")

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser);
      console.log("USER LOGGEDIN AS: ", foundUser)
    }
  }, [])

  const onLogin = async (e) => {
    e.preventDefault()
    const response = await axios.post("/users/loginSuccess", { email, psw });
    console.log("RESPONSE:", response)
    setUser(response.data)
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return (
    <>
      <Router>

        <div className="App">
          <TopNavBar />
          <div className='main--container'>
            <Routes>
              <Route path="/" element={<Timer />} />
              <Route path="/login" element={<Login
                onChangePsw={(e) => setPsw(e.target.value)}
                onChangeEmail={(e) => setEmail(e.target.value)}
                email={email}
                psw={psw}
                onLogin={(e) => { onLogin(e) }}
              />} />
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
