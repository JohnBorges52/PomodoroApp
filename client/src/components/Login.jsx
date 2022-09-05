import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import "../styles/login.scss"





export const Login = () => {


useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  console.log("loggedinuser:", JSON.parse(loggedInUser))
  // if(loggedInUser) {
  //   const foundUser = JSON.parse(loggedInUser)
  //   setUser(foundUser);
  //   console.log("USER LOGGEDIN AS: ", user)
  // }
}, [])

    
  const [email, setEmail] = useState("")
  const [ psw, setPsw] = useState('')
  const [user, setUser] = useState("")

  const onLogin =  async (e) => {
    e.preventDefault()
    const user = {email, psw};
    const response = await axios.post("/users/loginSuccess", {email, psw});
    console.log("RESPONSE:",response)
    setUser(response.data)
    localStorage.setItem('user', JSON.stringify(response.data))
  }


  return (

    <>
    <div className="div-gif-container">
      
    <div className="div-gif">
      </div>
    </div>
    <div className="login-form">

        

      <div className="login-message">
        <span> Login so you can count how many times you have focused! </span>
      </div>
     
     

      <form className="login-form-inputs" action="" method="">
        <label className="login-form-label" >E-mail</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="youremail@email.com" name="email" required />
        
        <label>Password</label>
        <input onChange={(e) => setPsw(e.target.value)} value={psw} type="password" placeholder="Enter your Password" name="psw" required />
        
        
        <div className="login-form-btns">

        <button onClick={(e)=> {onLogin(e)}}  > LOGIN </button>
        <button className="danger"> CANCEL </button>
        </div>
        <a href="/users/register"> or create an account</a>
      
      </form>
   

    </div>

  
    

    </>
  )


}