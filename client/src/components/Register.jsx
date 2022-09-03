import "../styles/register.scss"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export const Register = (props) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")
  const [pswConfirmation, setPswConfirmation] = useState("")


 
  const [emailExist, setEmailExist] = useState(false)
  const [usernameExist, setUsernameExist] = useState(false)
  const [pswMatches, setPswMatches] = useState(true)

  const onSubmit=(e)=> {
    e.preventDefault(); 
    axios.get('/users/alreadyExist', { params: {email, username}})
    .then(res => {
      console.log(res.data)
      if( usernameValidation(res.data) === true && emailValidation(res.data) === true) {
        registerUser(res.data)
      } else{
        console.log("NAO POOSTOU")
      }
      
    })
  }

  const emailValidation= (data) => {
    let emailList = []
    data.map(item => {
      emailList.push(item.email)
    })
    if(emailList.includes(email)) {
      setEmailExist(true)
      return false
    } else {
      setEmailExist(false)
      return true
    }
  }

  const usernameValidation= (data) =>{ 
    let usernameList = []
    data.map(item => {
      usernameList.push(item.username)
      })
    if(usernameList.includes(username)) {
      setUsernameExist(true)
      return false
    } else {
      setUsernameExist(false)
      return true
      }
  }



  const registerUser=() => {
        axios.post('/users/new', {
          username, email, psw
        }).then(res => console.log(res), console.log('reactPASSWORD', psw))
  }   
  
  const validatePswMatch = (psw, pswConfirmation) => {
    if (psw !== pswConfirmation) {
      setPswMatches(false)
      return false
    } else {
      setPswMatches(true)
      return true
    }
  }

 

  return (

    <div className="register-form">

      <div className="register-message">
        <span> Create an account so you can follow your progress and earn trophies  </span>
      </div>

      <div className="register-form-inputs">

        <label className="register-form-label">Username</label>
        <input onChange={(e) => (setUsername(e.target.value),setUsernameExist(false))  } value={username} type="text" placeholder="john45" name="username" required />

        {usernameExist && <span className="error-message">Username alredy exists!</span> }
        
        <label className="register-form-label">Email</label>
        <input onChange={(e) => (setEmail(e.target.value), setEmailExist(false))} value={email} type="email" placeholder="john@gmail.com" name="email" required />

        {emailExist && <span className="error-message">Email alredy exists!</span> }
        
        <div className="label-and-gif-container">
        <label className="psw-label">Password</label>
        <div className="gif-container"></div>
        </div>
        
        <input onChange={(e) => setPsw(e.target.value)} value={psw} type="password" placeholder="Enter your Password" name="psw" required />
        <input onChange={(e) => setPswConfirmation(e.target.value)} value={pswConfirmation} type="password" placeholder="Confirm your Password" name="psw-confirm" required />
        {!pswMatches && <span className="error-message"> Password did not match</span> }
      

        <div className="login-form-btns">

        <button onClick={(event) => (onSubmit(event), validatePswMatch(psw,pswConfirmation))}> LOGIN </button>
        <button className="danger" > CANCEL </button>
        </div>
        <a href="/login"> already have an account ?</a>
      
      </div>

    </div>


  )


}