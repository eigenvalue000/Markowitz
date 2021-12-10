import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
// import { LOGIN } from '../utils/mutations';

const Login = () => {
  //const [loginUser, {error, data}] = useMutation(ADD_USER)
  const loginUser = () => {
      const liEmail = document.getElementById('login-email').value;
      const liPassword = document.getElementById('login-pass').value;
      sessionStorage.setItem('user', liEmail);
      // loginUser({ variables: {email: suEmail, password: suPassword} });
      console.log(" - User Logged In - ");
      window.location.replace("/question");
  }


  return (
    <div>
    <h1>ALREADY HAVE AN ACCOUNT?</h1>
      <input id="login-email" type="email" placeholder="email"/>
      <br />
      <input id="login-pass" type="password" placeholder="password" />
      <br />
      <button id="signup-btn" onClick={loginUser} >LOG IN</button>
    </div>
  )
}

export default Login;
