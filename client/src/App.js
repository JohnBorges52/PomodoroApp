import './App.css'
import './styles/style.scss'
import './styles/popup.scss'
import { Routes, Route, useNavigate } from "react-router-dom";

//COMPONENTS  
import { TopNavBar } from './components/TopNavBar';
import { BottomNavBar } from './components/BottomNavBar';
import { Timer } from './components/Timer';
import { Login } from './components/Login';
import { Register } from './components/Register';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { MyProfile } from './components/MyProfile';
import { TEST } from './components/TEST';


function App() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState('')
  const [user, setUser] = useState("")
  const [userId, setUserId] = useState(0)
  const [loginStatus, setLoginStatus] = useState("")
  const [errorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser);
      console.log("user:", user)
      setUserId(foundUser.id)
      console.log("UserId: ", userId)
    } else {
      console.log("not loggedin ")
    }
  }, [])

  useEffect(() => {
    findUserId()
  }, [])


  const onLogin = (e) => {
    e.preventDefault()


    axios.post("/users/loginSuccess", { email, psw })
      .then(res => {
        if (res.data === "Wrong Password") {
          setLoginStatus("WrongPassword")
          setErrorMessage("Wrong Password")
        } else if (res.data === "NO EMAIL FOUND") {
          setLoginStatus("WrongEmail")
          setErrorMessage("Email Not Found")
        } else {
          setLoginStatus("")
          setErrorMessage("")
          setUser(res.data)
          localStorage.setItem('user', JSON.stringify(res.data))
          navigate("/")
          window.location.reload(false)
        }

      })
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

  const findUserId = () => {

    const loggedInUser = localStorage.getItem("user");
    const parseUser = JSON.parse(loggedInUser)
    if (parseUser) {
      setUserId(parseUser.id)
    } else {
      setUserId(0)
    }

    return
  }

  const usernameLength = (username) => {
    if (username.length > 20) {
      return username.substring(0, 20)
    } else {
      return username
    }
  }

  return (
    <div className="App">
      {user ? <TopNavBar user={usernameLength(user.username)} loginMsg={"LOGOUT"} onClick={(e) => handleLogout(e)} /> : <TopNavBar loginMsg={"LOGIN"} onClick={() => navigate("/login")} />}

      <div className='main--container'>
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/login" element={<Login
            onChangePsw={(e) => setPsw(e.target.value)}
            onChangeEmail={(e) => setEmail(e.target.value)}
            email={email}
            psw={psw}
            onLogin={(e) => (onLogin(e), findUserId())}
            onLogout={(e) => { handleLogout(e) }}
            loginStatus={loginStatus}
            message={errorMessage}
          />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
      {userId !== 0 ? <BottomNavBar href={"/myprofile"} /> : <BottomNavBar href={"/login"} />}
    </div>
  );
}

export default App;
