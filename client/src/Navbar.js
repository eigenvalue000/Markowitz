import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#faqs"
          onClick={() => handlePageChange('FAQs')}
          className={currentPage === 'FAQs' ? 'nav-link active' : 'nav-link'}
        >
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#question"
          onClick={() => handlePageChange('Question')}
          className={currentPage === 'Question' ? 'nav-link active' : 'nav-link'}
        >
          Question
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#protfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
