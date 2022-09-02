import "../styles/register.scss"
import axios from "axios";
import { useState } from "react";


export const Register = (props) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")
  const [pswConfirmation, setPswConfirmation] = useState("")
  const [emailExist, setEmailExist] = useState(false)
  const [usernameExist, setUsernameExist] = useState(false)

  const onSubmit=(e)=> {
    e.preventDefault(); 
    axios.get('/users/alreadyExist', { params: {email, username}})
    .then(res => {
      console.log(res.data)
      if(usernameValidation(res.data) === true && emailValidation(res.data) === true) {
        postEmail(res.data)
      } else{
        console.log("NAO POOSTOU")
      }
      
    })
  }

  const emailValidation= (data) =>{
    let emailList = []
    data.map(item => {
      emailList.push(item.email)
    })
    if(emailList.length === 0){
      return true
    } else {
      setEmailExist(true)
      return false
    }
  }

  const usernameValidation= (data) =>{ 
    let usernameList = []
    data.map(item => {
      usernameList.push(item.username)
      })
    if(usernameList.length === 0){
      return true
    } else {
      setUsernameExist(true)
      return false
      }
  }



  const postEmail=() => {
        axios.post('/users/new', {
          username, email, psw
        }).then(res => console.log(res))
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
        
        
        
        <div className="login-form-btns">

        <button onClick={(event) => (onSubmit(event))}> LOGIN </button>
        <button className="danger"> CANCEL </button>
        </div>
        <a href="/login"> already have an account ?</a>
      
      </div>

    </div>


  )


}