import './App.css';
import './styles/style.scss'
import './styles/popup.scss'
import classNames from "classnames";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Blank } from './components/Blank';

// COMPONENTS // 
import { TopNavBar } from './components/TopNavBar';
import { BottomNavBar } from './components/BottomNavBar';
import { Timer } from './components/Timer';
import { Login } from './components/Login';
import { Register } from './components/Register';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { MyProfile } from './components/MyProfile';


function App() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState('')
  const [user, setUser] = useState("")
  const [isLogin, setIsLogin] = useState(true)


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
    navigate("/")
  }

  const handleLogout = (e) => {
    e.preventDefault()
    setUser({})
    setEmail("")
    setPsw("")
    localStorage.clear();
    navigate("/login")
    window.location.reload(false)


  }

  return (
    <>
      <div className="App">
        {user ? <TopNavBar loginMsg={"LOGOUT"} onClick={(e) => handleLogout(e)} /> : <TopNavBar loginMsg={"LOGIN"} onClick={() => navigate("/login")} />}

        <div className='main--container'>
          <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/login" element={<Login
              onChangePsw={(e) => setPsw(e.target.value)}
              onChangeEmail={(e) => setEmail(e.target.value)}
              email={email}
              psw={psw}
              onLogin={(e) => { onLogin(e) }}
              onLogout={(e) => { handleLogout(e) }}
            />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/myprofile" element={<MyProfile />} />


          </Routes>
        </div>
        <BottomNavBar />
      </div>
      {/* ROUTES */}

    </>

  );
}

export default App;
