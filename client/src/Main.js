import React, { useState } from 'react';
import Navbar from './Navbar';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs'


export default function Main() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <AboutUs />;
    }
    if (currentPage === 'FAQs') {
      return <FAQs />;
    }
      return <Portfolio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}

    </div>
  );
}
