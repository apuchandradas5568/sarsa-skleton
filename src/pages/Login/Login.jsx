<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/main
import image from "../../images/n-1.jpeg";
import Google from "../../images/search-1.png";
import { Link, NavLink } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import "./Login.css";
<<<<<<< HEAD

function Login() {
=======
import useAxiosPublic from "../../hooks/useAxios";
import OAuth from "../../components/OAuth";

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const axios = useAxiosPublic();
  const handleSubmit = async () =>{
    try {
      const response = await axios.post('/users/login',{
        email,
        password
      })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
>>>>>>> origin/main
  return (
    <div className="container">
      <div className="section-1">
        <div className="text">
          <h1>Welcome Back</h1>
          <span>Welcome back! Please enter Your details</span>
        </div>

        <div className="input-wrapper">
          <div className="input-email">
            <label htmlFor="input-box">Email</label>
            <input
              type="email"
              placeholder=" Enter your email"
              id="input-box"
<<<<<<< HEAD
=======
              value={email}
              onChange={ev=>setEmail(ev.target.value)}
>>>>>>> origin/main
            />
          </div>

          <div className="input-pass">
            <label htmlFor="input-box">Password</label>
<<<<<<< HEAD
            <input type="password" placeholder=" *******" id="input-box" />
=======
            <input type="password" placeholder=" *******" id="input-box"
            value={password}
            onChange={ev=>setPassword(ev.target.value)}
            />
>>>>>>> origin/main
          </div>
        </div>

        <div className="wrapper">
          <div class="remember-checkbox-wrapper">
            <input class="remember-checkbox" type="checkbox" />
            <span>Remember Me</span>
          </div>

          <Link to="/forget-password" class="forgot-password">
            Forgot password?
          </Link>
        </div>

        <div className="button">
<<<<<<< HEAD
          <button class="sign-in-button">Sign in</button>

          <button class="Google-button">
            <img src={Google} alt="" />
            Sign In With Google
          </button>
=======
          <button class="sign-in-button" onClick={handleSubmit}>Sign in</button>
          <OAuth/>
>>>>>>> origin/main
        </div>

        <div class="dont-have-an-account-sign-up-wrapper">
          <div class="dont-have-an-container">
            <span class="dont-have-an">Don’t have an account?</span>
            <span class="span"> </span>
            <Link to="/signup" class="sign-up-fo">
              Sign up fo free!
            </Link>
          </div>
        </div>
      </div>

      <div className="section-2">
        <img className="cover-img" src={image} alt="" />
      </div>
    </div>
  );
}

export default Login;
