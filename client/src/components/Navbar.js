import React from 'react';
import logo from './markowitz-logo.png';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

function Navbar({ currentPage, handlePageChange }) {
  const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};
  return (
    <div className="nav">
      <div className="nav-left">
      {Auth.loggedIn() ? (
        <div className="nav-menu">
          <a href="/">Home</a>
          <a href="/question">Questions</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/aboutus">About Us</a>
          <a href="/faqs">FAQ</a>
          <a href="#" onClick={logout}>Logout</a>
        </div>
      ) : (
        <div className="nav-menu">
          <a href="/">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/faqs">FAQ</a>
          <a href="/">Login</a>
        </div>
      )}

      </div>
      <div className="nav-right">
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
