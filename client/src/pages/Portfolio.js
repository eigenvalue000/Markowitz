import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STOCK } from '../utils/queries';
import StockList from '../components/StockList'
import Toggle from '../components/Toggle';

export default function Portfolio() {
  const { loading, data } = useQuery(QUERY_STOCK);
  console.log(data);
  const stocks = data?.stocks || [];
  console.log(stocks)

  return (
    <div>
      <Toggle />
    <div className="stock-table">
      {
        loading ? (<div>Loading...</div>) : (
          <table>
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
    <button >Update Stocks</button>

    <div className="selected-stock-info">
      <div className="stock-header-name">
        <h2>ABC - The American Brocasting Corporation</h2>
        <img src="https://image.shutterstock.com/image-vector/simple-infographic-line-chart-sky-260nw-534979027.jpg" alt="temp-graph" />
      </div>
    </div>
</div>
  );
}
