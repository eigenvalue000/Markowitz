import React, { useState } from 'react';
import Portfolio from './Portfolio'

export default function Main() {
  // const [currentPage, setCurrentPage] = useState('Home');
  //
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Blog') {
  //     return <Blog />;
  //   }
  //   return <Contact />;
  // };
  // 
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>
        <Portfolio />
      </h1>
    </div>
  );
}
