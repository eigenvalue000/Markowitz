import React from 'react';

export default function Question() {
  return (
    <div className="question-page">
      <div className="qstocks">
        <h1>WHICH STOCKS DO YOU OWN?</h1>
        <div className="qbuttons">
          <button>ABC</button>
          <button>DEF</button>
          <button>GHI</button>
          <button>JKL</button>
          <button>ABC</button>
          <button>DEF</button>
          <button>GHI</button>
          <button>JKL</button>
          <button>ABC</button>
          <button>DEF</button>
          <button>GHI</button>
          <button>JKL</button>
          <button>ABC</button>
          <button>DEF</button>
          <button>GHI</button>
        </div>
      </div>
      <div className="stock-search">
        <h1>DON'T SEE YOUR STOCK?</h1>
        <input type="text" name="stock-search" value=""/>
        <button>SEARCH</button>
      </div>
      <div>
        <h1>WOULD YOU LIKE TO CONTINUE?</h1>
        <div>
          <span>ABC </span><span>ABC </span><span>ABC </span><span>ABC </span><span>ABC </span>
        </div>
        <button className="cont-btn">CONTINUE</button>
      </div>
    </div>
  );
}




