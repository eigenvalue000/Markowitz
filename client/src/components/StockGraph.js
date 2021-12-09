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

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const dataa = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



const StockGraph = ({ symbol }) => {
  const { loading, data } = useQuery(QUERY_STOCK_BY_SYMBOL,
    { variables: { symbol: symbol } });
  const stock = data?.stock || {};
  console.log(stock.priceHistory);
  if (!data) {
    return (<h1>Stock History Not Found</h1>);
  }
  return (
    <div>
      <Line options={options} data={dataa} />
      {<div>
        {stock.priceHistory.map((price) => (
          <p>{price}</p>
        ))}
      </div>}

    </div>
  )
}

export default StockGraph;





