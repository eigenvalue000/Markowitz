import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_STOCK_BY_SYMBOL } from '../utils/queries';

const SingleStock = ({ symbol }) => {
  const { loading, data } = useQuery(QUERY_STOCK_BY_SYMBOL,
    { variables: {symbol: symbol }})
    //console.log(data);
    const stock = data?.stock || {};
  if (!data) {
    return (<h1>Stock Not Found</h1>);
  }
  return (
    <tr>
        <td>{stock.symbol}</td>
        <td>{stock.closingPrice}</td>
        <td>{stock.previousClose}</td>
    </tr>
  )
}

export default SingleStock;
