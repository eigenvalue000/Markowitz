import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STOCK } from '../utils/queries';
import StockList from '../components/StockList';
import Toggle from '../components/Toggle';
import SingleStock from '../components/SingleStock';
import StockGraph from '../components/StockGraph';
import UpdateStocks from '../components/UpdateStocks';

export default function Portfolio() {
  const stocks = ["MSFT", "AMZN", "ME"]

  return (
    <div>
      <Toggle />
    <div className="stock-table">
      {
        (
          <table className="port-stocks">
          <tr>
            <th>Stock</th>
            <th>Closing</th>
            <th>Previous</th>
          </tr>
          <StockList stocks={stocks}/>
          </table>
        )
      }
    </div>
    <UpdateStocks symbols={stocks} />

    <div className="selected-stock-info">
      <div className="stock-header-name">
        <h2>MSFT - Microsoft</h2>
        <StockGraph symbol="MSFT"/>
      </div>
    </div>
</div>
  );
}
