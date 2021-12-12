import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
          <div>
          <h1>ALREADY HAVE AN ACCOUNT?</h1>
            {data ? (
              <p>
                {window.location.replace("/portfolio")}
                Success! You may now head{' '}
                <Link to="/portfolio">to the portfolio.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  id="login-email"
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                /><br/>
                <input
                  id="login-password"
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                /><br/>
                <button
                  id="signup-btn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
  );
};

export default Login;

// <div>
// <h1>ALREADY HAVE AN ACCOUNT?</h1>
//   <input id="login-email" type="email" placeholder="email"/>
//   <br />
//   <input id="login-pass" type="password" placeholder="password" />
//   <br />
//   <button id="signup-btn" onClick={loginNewUser} >LOG IN</button>
// </div>
