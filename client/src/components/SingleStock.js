import React from 'react';
import { useQuery } from '@apollo/client';
// import StockGraph from '../components/StockGraph';

import { QUERY_STOCK_BY_SYMBOL } from '../utils/queries';

const SingleStock = ({ symbol }) => {
  const { data } = useQuery(QUERY_STOCK_BY_SYMBOL,
    { variables: {symbol: symbol }})
    //console.log(data);
    const stock = data?.stock || {};

  if (!data) {
    return (<h1>Stock Not Found</h1>);
  }
  function onButtonClick() {
    console.log(`Generating ${symbol} chart...`);
    
  }

  return (
    <tr>
        <td><button onClick={onButtonClick}>{stock.symbol}</button></td>
        <td>{stock.closingPrice}</td>
        <td>{stock.previousClose}</td>
    </tr>
  )
}

export default SingleStock;
