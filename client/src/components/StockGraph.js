import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_STOCK_BY_SYMBOL } from '../utils/queries';

const StockGraph = ({ symbol }) => {
  const { loading, data } = useQuery(QUERY_STOCK_BY_SYMBOL,
    { variables: {symbol: symbol }})
    console.log(data);
    const stock = data?.stock || {};
  if (!data) {
    return (<h1>Stock History Not Found</h1>);
  }
  return (
    <div>
      { stock.priceHistory.map((price) => (
        <p>{price}</p>
      )) }
    </div>
  )
}

export default StockGraph;
