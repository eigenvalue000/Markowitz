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
            <h3>STOCK COLLECTIONS</h3>
            <h3>API</h3>
            <a href="https://github.com/eigenvalue000" target="_blank"><button>GITHUB</button></a>
          </div>
          <div className="about-stu-card"> 
            <h1>JAMES LOPEZ</h1>
            <h3>BACKEND</h3>
            <h3>USER COLLECTIONS</h3>
            <a href="https://github.com/Semaj-sudo" target="_blank"><button>GITHUB</button></a>
          </div>
          <div className="about-stu-card">
            <h1>DAVE BLOIS</h1>
            <h3>FRONTEND</h3>
            <h3>UTILITIES</h3>
            <a href="https://github.com/davebloisesquire" target="_blank"><button>GITHUB</button></a>
          </div>
          <div className="about-stu-card">
            <h1>MATTHEW JAWORSKI</h1>
            <h3>FRONTEND</h3>
            <h3>CSS/STYLING</h3>
            <a href="https://github.com/Mattyjaws" target="_blank"><button>GITHUB</button></a>
          </div>
          <div className="about-stu-card">
            <h1>AYELE LINTAMO</h1>
            <h3>FRONTEND</h3>
            <a href="https://github.com/ayele4" target="_blank"><button>GITHUB</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
