import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PORTFOLIO, ADD_STOCK } from '../utils/mutations';

export default function Question() {
  const currentUser = sessionStorage.getItem('user');
  const [portfolio, setPortfolio] = useState([]);
  const [updateUserStocks, {error, data}] = useMutation(UPDATE_PORTFOLIO);
  const [addStockToDB] = useMutation(ADD_STOCK);
  //var portfolio = ["APPL", "MSFT"]
  const updateUserPortfolio = () => {
    updateUserStocks({variables: {email: currentUser, portfolio: portfolio}})
    sessionStorage.setItem('userPortfolio', JSON.stringify(portfolio));
    window.location.replace("/portfolio");
  }

  function addToPortfolio(event) {
    let newStock = event.target.innerHTML;
    addStockToDB({variables: {symbol: newStock}})
    setPortfolio(oldArray => [...oldArray, newStock]);
    return;
  }

  function logPortfolio() {
    console.log(portfolio);
  }

  return (
    <div className="question-page">
      <div className="qstocks">
        <h1>WHICH STOCKS DO YOU OWN?</h1>
        <div className="qbuttons">
          <button onClick={addToPortfolio}>AAPL</button>
          <button onClick={addToPortfolio}>KO</button>
          <button onClick={addToPortfolio}>JNJ</button>
          <button onClick={addToPortfolio}>DIS</button>
          <button onClick={addToPortfolio}>GOOG</button>
          <button onClick={addToPortfolio}>TSLA</button>
          <button onClick={addToPortfolio}>TWTR</button>
          <button onClick={addToPortfolio}>VZ</button>
          <button onClick={addToPortfolio}>AMZN</button>
          <button onClick={addToPortfolio}>MSFT</button>
          <button onClick={addToPortfolio}>AMD</button>
          <button onClick={addToPortfolio}>BAC</button>
          <button onClick={addToPortfolio}>AAL</button>
          <button onClick={addToPortfolio}>AMC</button>
          <button onClick={addToPortfolio}>PFE</button>
        </div>
      </div>
      <div className="stock-search">
        <h1>DON'T SEE YOUR STOCK?</h1>
        <input type="text" name="stock-search" placeholder="type a stock symbol here..." value=""/>
        <button onClick={logPortfolio}>ADD</button>
      </div>
      <div>
        <h1>WOULD YOU LIKE TO CONTINUE?</h1>
        <div>
          {portfolio.map((stock) => <div className="stock-choice">{stock}</div>)}
        </div>
        <button className="cont-btn" onClick={updateUserPortfolio}>CONTINUE</button>
      </div>
    </div>
  );
}
