import React, { useState } from 'react';
import Navbar from './Navbar';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import Login from './pages/Login';
import Question from './pages/Question';



export default function Main() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Login />;
    }
    if (currentPage === 'About') {
      return <AboutUs />;
    }
    if (currentPage === 'FAQs') {
      return <FAQs />;
    }
    if (currentPage === 'Question') {
      return <Question />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
      return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}

    </div>
  );
}
