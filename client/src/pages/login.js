import React, {useState} from "react";
const Login = () => {
  const [form, setForm] = useState("Login")
  if(form === "Login"){
    return(
      <>
      
      <form>
      <h2>Login</h2>
        <input type="text" name="email" placeholder="Email"/>
        <input type="password" name="pass" placeholder="Password"/>
        <div className="form-btns">
          <button className="primary-btn"> Submit</button>
          <button className="secondary-btn" onClick={() => setForm("Register")}>Register</button>
        </div>
        
      </form>
      </>
    )
  }else{
    return(
      <>
      
      <form>
      <h2>Register</h2>
        <input type="email" name="email" placeholder="Email"/>
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="pass" placeholder="Password"/>
        <input type="password" name="pass2" placeholder="Repeat Password"/>
        <div className="form-btns">
        <button className="primary-btn">Submit</button>
        <button className="secondary-btn" onClick={() => setForm("Login")}>Login</button>
        </div>
      </form>
      </>
    )
  }
    
  };
  
  export default Login;
  