import React from 'react';
import { Link } from 'react-router-dom';

const StockList = ({ stocks }) => {
    if (!stocks.length) {
        return <h3>No Stocks Yet</h3>
    }

    return (
        stocks.map((stock) => (
            <tr>
                <td>{stock.symbol}</td>
                <td>{stock.closingPrice}</td>
                <td>{stock.previousClose}</td>
            </tr>
            
        ))
    )
};

export default StockList;