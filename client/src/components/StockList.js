import React from 'react';
import SingleStock from '../components/SingleStock';


const StockList = ({ stocks }) => {
    if (!stocks.length) {
        return <h3>No Stocks Yet</h3>
    }

    return (
        stocks.map((stock) => (
          <SingleStock symbol={stock.symbol}/>
        ))
    )
};

export default StockList;
