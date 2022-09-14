import "../styles/register.scss"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Register = (props) => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")
  const [pswConfirmation, setPswConfirmation] = useState("")


 
  const [emailExist, setEmailExist] = useState(false)
  const [usernameExist, setUsernameExist] = useState(false)
  const [pswMatches, setPswMatches] = useState(true)
  const [alertMsg, setAlertMsg] = useState('')

useEffect(()=>{
  
},[username])



  const onSubmit=(e)=> {
    e.preventDefault(); 
    axios.get('/users/alreadyExist', { params: {email, username}})
    .then(res => {
      if( usernameValidation(res.data) === true && emailValidation(res.data) === true && pswValidation(psw, pswConfirmation) === true) {
        registerUser(res.data)
        navigate("/login")
        window.location.reload(false)

      } else{
        console.log("NAO POOSTOU")
      } 
      
    })
  }
  const isEmailValid = (email) => {     // <pass to a helperFunction folder

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setAlertMsg("")
      return true
    }
    setAlertMsg("InvalidEmail")
    return false
  }

  const emailValidation = (data) => {
    let emailList = []
    data.map(item => {
      emailList.push(item.email)
    })

    if(isEmailValid(email) === false ) {
    
      return false
    }

    if(emailList.includes(email)) {
      setEmailExist(true)
      setAlertMsg("")
      return false
    } 
    
    if(!emailList.includes(email)) {
      setEmailExist(false)
      setAlertMsg("")
      return true
    
    }
  }

  const usernameValidation = (data) => { 
    let usernameList = []
    data.map(item => {
      usernameList.push(item.username)
    })

    if(username.length < 3){
      setAlertMsg("InvalidUsername")
      return false
    }
    if(username.length > 14 || username.length < 3) {
      setAlertMsg("")
    }

    if(username.length > 14){
      setAlertMsg("UsernameTooLong")
      return false
    }
    if(usernameList.includes(username)) {
      setUsernameExist(true)
      setAlertMsg("")
      return false
    } 
    if (!usernameList.includes(username)) {
      setUsernameExist(false)
      setAlertMsg("")
      return true
    }
  }

  
  const pswValidation = (psw, pswConfirmation) => {
    if (psw !== pswConfirmation) {
      setPswMatches(false)
      return false
    } else {
      setPswMatches(true)
      return true
    }
  }
  
  const registerUser=() => {
        axios.post('/users/new', {
          username, email, psw
        }).then(res => console.log(res), console.log('reactPASSWORD', psw))
  }   
 

  return (

    <div className="register-form">

      <div className="register-message">
        <span> Create an account so you can follow your progress and earn trophies  </span>
      </div>

      <div className="register-form-inputs">

        <label className="register-form-label">Username</label>
        <input onChange={(e) => {setUsername(e.target.value); setUsernameExist(false)}} value={username} type="text" placeholder="ex: john45" name="username" required />

        {usernameExist && <span className="error-message">Username alredy exists!</span> }
        {alertMsg ==="InvalidUsername" && <span className="error-message">Username needs to be longer</span> }
        {alertMsg ==="UsernameTooLong" && <span className="error-message">Username must have 14 characters or less</span>}
        
        <label className="register-form-label">Email</label>
        <input onChange={(e) => (setEmail(e.target.value.toLocaleLowerCase()), setEmailExist(false))} value={email} type="email" placeholder="ex: john@gmail.com" name="email" required />

        {emailExist && <span className="error-message">Email alredy exists</span> }
        {alertMsg === 'InvalidEmail' && <span className="error-message"> E-mail Invalid</span> }
        
        <div className="label-and-gif-container">
        <label className="psw-label">Password</label>
        <div className="gif-container"></div>
        </div>
        
        <input onChange={(e) => setPsw(e.target.value)} value={psw} type="password" placeholder="Enter your Password" name="psw" required />
        <input onChange={(e) => setPswConfirmation(e.target.value)} value={pswConfirmation} type="password" placeholder="Confirm your Password" name="psw-confirm" required />
        {!pswMatches && <span className="error-message"> Password did not match</span> }
      

        <div className="login-form-btns">

        <button onClick={(event) => (onSubmit(event), pswValidation(psw,pswConfirmation))}> REGISTER </button>
        <button className="danger" onClick={()=>{navigate("/")}}> CANCEL </button>
        </div>
        <a href="/login"> already have an account ?</a>
      
      </div>

    </div>


  )


}