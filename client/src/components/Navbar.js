import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/">
          HOME
        </a>
      </li>
      <li className="nav-item">
        <a href="/question">
          QUESTIONS
        </a>
      </li>
      <li className="nav-item">
        <a href="/portfolio">
          PORTFOLIO
        </a>
      </li>
      <li className="nav-item">
        <a href="/aboutus">
          ABOUT US
        </a>
      </li>
      <li className="nav-item">
        <a href="/faqs">
          FAQ
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
