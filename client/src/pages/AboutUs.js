import React from 'react';

export default function AboutUs() {
  return (
    <div>
      <div className="mark-info">
        <h1>WHO IS MARKOWITZ?</h1>
        <p><a href="https://en.wikipedia.org/wiki/Harry_Markowitz" className="marko" target="_blank">HARRY MAX MARKOWITZ</a> is an American economist who received the 1989 John von Neumann Theory Prize and the 1990 Nobel Memorial Prize in Economic Sciences.</p>
        <p>Markowitz is a professor of finance at the Rady School of Management at the Univeristy of California, San Diego. He is best known for his pioneering work in modern portfolio theory, studying the effects of asset risk, return, correlation and diversification on probable investment portfolio returns.</p>
      </div>
      <div className="about-team">
        <h1>ABOUT THE TEAM</h1>
        <div className="about-stu-sec">
          <div className="about-stu-card">
            <h1>GARRETT KEGEL</h1>
            <h3>BACKEND</h3>
            <h3>BACKEND</h3>
            <button>GITHUB</button>
          </div>
          <div className="about-stu-card"> 
            <h1>JAMES LOPEZ</h1>
            <h3>BACKEND</h3>
            <h3>BACKEND</h3>
            <button>GITHUB</button>
          </div>
          <div className="about-stu-card">
            <h1>DAVE BLOIS</h1>
            <h3>FRONTEND</h3>
            <h3>UTILITIES</h3>
            <button>GITHUB</button>
          </div>
          <div className="about-stu-card">
            <h1>MATTHEW JAWORSKI</h1>
            <h3>FRONTEND</h3>
            <h3>CSS/STYLING</h3>
            <button>GITHUB</button>
          </div>
          <div className="about-stu-card">
            <h1>AYELE LINTAMO</h1>
            <h3>FRONTEND</h3>
            <h3>FRONTEND</h3>
            <button>GITHUB</button>
          </div>
        </div>
      </div>
    </div>
  );
}
