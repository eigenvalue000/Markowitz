import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/aboutus">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a href="/faqs">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="/question">
          Question
        </a>
      </li>
      <li className="nav-item">
        <a href="/portfolio">
          Portfolio
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
