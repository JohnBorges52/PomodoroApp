import "../styles/login.scss"


export const Login = () => {
  

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
        <label className="login-form-label" htmlFor="">Username</label>
        <input type="email" placeholder="john@gmail.com" name="email" required />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your Password" name="password" required />
        
        
        <div className="login-form-btns">

        <button> LOGIN </button>
        <button className="danger"> CANCEL </button>
        </div>
        <a href="/register"> or create an account</a>
      
      </form>
   

    </div>

  
    

    </>
  )


}