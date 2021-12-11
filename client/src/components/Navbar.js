import React from 'react';
import logo from './markowitz-logo.png';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-menu">
          <a href="/">Home</a>
          <a href="/question">Questions</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/aboutus">About Us</a>
          <a href="/faqs">FAQ</a>
        </div>
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
