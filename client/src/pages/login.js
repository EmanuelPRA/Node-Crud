import React, {useState} from "react";
const Login = () => {
  const [form, setForm] = useState("Login")
  if(form === "Login"){
    return(
      <>
      <h2>Login</h2>
      <form>
        <input type="text" name="email" placeholder="Email"/>
        <input type="password" name="pass" placeholder="Password"/>
        <button> Submit</button>
        <button onClick={() => setForm("Register")}>Register</button>
      </form>
      </>
    )
  }else{
    return(
      <>
      <h2>Register</h2>
      <form>
        <input type="email" name="email" placeholder="Email"/>
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="pass" placeholder="Password"/>
        <input type="password" name="pass2" placeholder="Repeat Password"/>
        <button> Submit</button>
        <button onClick={() => setForm("Login")}>Login</button>
      </form>
      </>
    )
  }
    
  };
  
  export default Login;
  