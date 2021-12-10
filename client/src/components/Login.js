import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

const SignUp = () => {
  const [newUser, {error, data}] = useMutation(ADD_USER)
  const signUpNewUser = () => {
      const suEmail = document.getElementById('signup-email').value;
      const suPassword = document.getElementById('signup-pass').value;
      newUser({ variables: {email: suEmail, password: suPassword} });
      console.log(" - User Added - ");
  }


  return (
    <div>
    <h1>NEW TO STOCKS?</h1>
      <input id="signup-email" type="email" placeholder="email"/>
      <br />
      <input id="signup-pass" type="password" placeholder="password" />
      <br />
      <button id="signup-btn" onClick={signUpNewUser} >SIGN UP</button>
    </div>
  )
}

export default SignUp;
