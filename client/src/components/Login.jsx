import "../styles/login.scss"


export const Login = () => {
  

  return (

    <div className="login-form">

      <div className="login-message">
        <span> Login so you can count how many times you have focused! </span>
      </div>

      <form className="login-form-inputs" action="" method="">
        <label className="login-form-label" htmlFor="">Username</label>
        <input type="email" placeholder="john@gmail.com" name="email" required />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your Password" name="password" required />

        <button> LOGIN </button>
      
      </form>

    </div>


  )


}