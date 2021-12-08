import React from 'react';

export default function Question() {
  return (
    <div className="login-page">
      <div className="new-user">
        <h1>NEW TO STOCKS?</h1>
          <input type="email" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
        <button>SIGN UP</button>
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
          <h1>LOREM</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="infosec">
          <h1>IPSUM</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="infosec">
          <h1>LOREM</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  );
}
