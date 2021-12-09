import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STOCK_BY_SYMBOL } from '../utils/queries';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);





const StockGraph = ({ symbol }) => {

  const { loading, data } = useQuery(QUERY_STOCK_BY_SYMBOL,
    { variables: { symbol: symbol } });
  const stock = data?.stock || {};
  console.log(stock);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${stock.symbol} Line Chart`,
      },
    },
  };

  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const dataa = {
    labels,
    datasets: [
      {
        label: `${stock.symbol}`,
        data: stock.priceHistory,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };


  if (!data) {
    return (<h1>Stock History Not Found</h1>);
  }
  return (
    <div style={{width: 700 + 'px'}}>
      <Line options={options} data={dataa} />
    </div>
  )
}

export default StockGraph;









//       {<div>
// {stock.priceHistory.map((price) => (
//   <p>{price}</p>
// ))}
// </div>}