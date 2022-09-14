import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import "../styles/login.scss"





export const Login = (props) => {

return (

    <>
    <div className="div-gif-container">
      
    <div className="div-gif">
      </div>
    </div>
    <div className="login-form">

        

      <div className="login-message">
        <span className="title"> Login so you can count how many times you have focused! </span>
      </div>
     
     

      <form className="login-form-inputs" action="" method="">
        <label className="login-form-label" >E-mail</label>
        <input onChange={props.onChangeEmail} value={props.email} type="email" placeholder="youremail@email.com" name="email" required />
        {props.loginStatus === "WrongEmail" && <span className="error-message">{props.message}</span>}
        
        <label>Password</label>
        <input onChange={props.onChangePsw} value={props.psw} type="password" placeholder="Enter your Password" name="psw" required />
        {props.loginStatus === "WrongPassword" && <span className="error-message">{props.message}</span>}
        
        
        <div className="login-form-btns">

        <button onClick={props.onLogin} > LOGIN </button>
        <button className="danger" onClick={props.onCancel}> CANCEL </button>
        </div>
        <a href="/users/register"> or create an account</a>
      
      </form>
   

    </div>

  
    

    </>
  )


}