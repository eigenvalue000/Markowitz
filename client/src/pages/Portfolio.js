import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_BY_EMAIL } from '../utils/queries';
import StockList from '../components/StockList';
import Toggle from '../components/Toggle';
import UpdateStocks from '../components/UpdateStocks';
import GraphList from '../components/GraphList';
import Auth from '../utils/auth';

export default function Portfolio() {
  const currentUser = Auth.getProfile().data.email
  const { loading, error, data } = useQuery(QUERY_USER_BY_EMAIL, {
    variables: {email: currentUser}
  })
  if (loading) return 'loading...';
  if (error) return 'error';
  const stocks = JSON.parse(sessionStorage.getItem("userPortfolio"));
  //const stocks = data.userEmail.portfolio; // User.portfolio
  //console.log(data.userEmail.portfolio[1])
  const graphListStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column wrap',
    margin: '10px',
  };


  return (
    <div>
      <div className="stock-table">
        {
          (
            <table className="port-stocks">
              <tbody>
              <tr>
                <th>Stock</th>
                <th>Closing</th>
                <th>Previous</th>
                <th>20 Day Mean Return</th>
              </tr>
              </tbody>
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
