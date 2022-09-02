import "../styles/register.scss"
import axios from "axios";
import { useState } from "react";


export const Register = (props) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")
  const [pswConfirmation, setPswConfirmation] = useState("")

  const validEmail=(e)=> {
    e.preventDefault(); 
    axios.get('/users/alreadyExist', { params: {email}})
    .then(res => {
     checkEmail(res.data)
      
    })
  }


  const checkEmail=(data) => {
    let result = [] 
      data.map(item => {
        result.push(item.email)
      })
    if (result.includes(email)) {
        console.log("EMAIL ALREDY EXIST")
    }
       else {
        axios.post('/users/new', {

          username, email, psw
        }
        )
        .then(res => console.log(res))
      } 
    
      
      
    
    //  else {
    //   axios.post('users/new', 
    //   username, email, psw 
    //   ).then(res=>{
    //     console.log(res)
    //   })
    // }
   } 

      
 
        
    
  
  

  return (

    <div className="register-form">

      <div className="register-message">
        <span> Create an account so you can follow your progress and earn trophies  </span>
      </div>

      <div className="register-form-inputs">

        <label className="register-form-label">Username</label>
        <input onChange={(e) => setUsername(e.target.value)  } value={username} type="text" placeholder="john45" name="username" required />
        
        <label className="register-form-label">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="john@gmail.com" name="email" required />
        
        <div className="label-and-gif-container">
        <label className="psw-label">Password</label>
        <div className="gif-container"></div>
        </div>
        
        <input onChange={(e) => setPsw(e.target.value)} value={psw} type="password" placeholder="Enter your Password" name="psw" required />
        <input onChange={(e) => setPswConfirmation(e.target.value)} value={pswConfirmation} type="password" placeholder="Confirm your Password" name="psw-confirm" required />
        
        
        
        <div className="login-form-btns">

        <button onClick={(event)=> validEmail(event)}> LOGIN </button>
        <button onClick={(e)=>{validEmail(e)}} className="danger"> CANCEL </button>
        </div>
        <a href="/login"> already have an account ?</a>
      
      </div>

    </div>


  )


}