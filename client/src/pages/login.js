import Axios from "axios";
import React, {useState} from "react";
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

const Login = () => {
  const [form, setForm] = useState("Login")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function register(){
        Axios.post('http://localhost:3001/register', {
        mail: email,
        uname: username,
        pass: bcrypt.hashSync(password, salt)
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

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
      
      <form onSubmit={register()}>
      <h2>Register</h2>
        <input type="email" name="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="text" name="username" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
        <input type="password" name="pass" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>

        <div className="form-btns">
        <input type="submit" className="primary-btn" value="Submit"/>
        <button className="secondary-btn">Login</button>
        </div>
      </form>
      </>
    )
  }
    
  };
  
  export default Login;
  