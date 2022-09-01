import "../styles/register.scss"


export const Register = () => {
  

  return (

    <div className="register-form">

      <div className="register-message">
        <span> Create an account so you can follow your progress and earn trophies  </span>
      </div>

      <form className="register-form-inputs" action="" method="">
        <label className="register-form-label" htmlFor="">Username</label>
        <input type="email" placeholder="john@gmail.com" name="email" required />
        <div className="label-and-gif-container">

        <label className="psw-label" htmlFor="">Password</label>
        <div className="gif-container"></div>
        </div>
        <input type="password" placeholder="Enter your Password" name="password" required />
        <input type="password" placeholder="Confirm your Password" name="password" required />
        
        
        
        <div className="login-form-btns">

        <button> LOGIN </button>
        <button className="danger"> CANCEL </button>
        </div>
        <a href="/login"> already have an account ?</a>
      
      </form>

    </div>


  )


}