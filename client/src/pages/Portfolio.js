import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STOCK } from '../utils/queries';
import StockList from '../components/StockList';
import Toggle from '../components/Toggle';
import SingleStock from '../components/SingleStock';
import StockGraph from '../components/StockGraph';
import UpdateStocks from '../components/UpdateStocks';
import GraphList from '../components/GraphList';

export default function Portfolio() {
  const stocks = ["MSFT", "AMZN", "ME"]; // User.portfolio
  const graphListStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column wrap',
    margin: '10px',
  };

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
              <StockList stocks={stocks} />
            </table>
          )
        }
      </div>
      <UpdateStocks symbols={stocks} />

      <div className="selected-stock-info">
        <div className="stock-header-name" style={graphListStyle}>
          <GraphList symbols={stocks} />
        </div>
      </div>
    </div>
  );
}


{/* <StockGraph symbol={stocks[0]} />
<StockGraph symbol={stocks[1]} />
<StockGraph symbol={stocks[2]} /> */}