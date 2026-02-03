import React, { useState } from "react";
import "../../css/login-page/login.css";
import { Link,Navigate,useNavigate } from "react-router-dom";

function LoginPage() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (!storedEmail || !storedPassword){

      return alert("No User found. Please Signup First.");

    }

    if (email === storedEmail && password === storedPassword){
      Navigate("/")
    }

    else{
      alert("invalid email or password")
    }


  }


  return (
    <div className="container my-5 login-form-container">
      <form onSubmit={login}>
      <div
        className="container"
        id="login-form"
      >
        <div>
          <input type="text" name="email" placeholder="orgado@user.com" autoComplete="email" />
        </div>

        <div>
          <input type="password" name="password" placeholder="********" autoComplete="current-password" />
        </div>

        <div id="login-checkbox" className="mb-1">
          <input type="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>

        <div className="mb-4">
          <button type="submit">Login Now</button>
        </div>

        <div>
          <span style={{ color: "#777" }}>Not registered?</span>
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
      </form>
    </div>
  );
}

export default LoginPage;
