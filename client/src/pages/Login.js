import React from 'react';
import SignUp from '../components/SignUp'

export default function Question() {
  return (
    <div className="login-page">
      <div className="new-user">
        <SignUp/>
      </div>
      <div className="returning-user">
        <h1>ALREADY HAVE AN ACCOUNT?</h1>
        <input type="email" placeholder="email"/>
        <br />
        <input type="password" placeholder="password" />
        <br />
      <button>LOG IN</button>
      </div>
      <div className="info-section">
        <h1>ABOUT MARKOWITZ</h1>
        <div className="infosec">
          <h1>WHO ARE WE?</h1>
          <p>We are a team that has put together an app based around Harry Markowitzs' portfolio theory.</p>
        </div>
        <div className="infosec">
          <h1>WHAT DOES OUR APP DO?</h1>
          <p>Our App helps make investment decisions by getting historical prices for a stock along with measuring the expected return and variance of the daily returns to the stocks of your choice.</p>
        </div>
        <div className="infosec">
          <h1>WHAT API'S DO WE USE?</h1>
          <p>Our app fetches the historical prices for each stock using IEX/Polygon.io api.</p>
        </div>
      </div>
    </div>
  );
}
