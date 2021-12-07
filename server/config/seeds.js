const db = require('./connection');
const { Stock } = require('../models');

const axios = require('axios');

const stockData = [{symbol: 'MSFT', closingPrice: 100, previousClose: 50},
{symbol: 'AMZN', closingPrice: 100, previousClose: 50},
{symbol: 'JPST', closingPrice: 100, previousClose: 50}
];

// 'https://cloud.iexapis.com/v1/stock/MSFT/price?token=pk_7c91c18fa8774e669a5df330e40a50b9'
// https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_7c91c18fa8774e669a5df330e40a50b9
// `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`
// 'https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_7c91c18fa8774e669a5df330e40a50b9'

db.once('open', async () => {
    // const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';

    // for (let i = 0; i < stockData.length; i++) {
    //     console.log('Before ' + stockData[1].closingPrice);
    //     var symbol = stockData[i].symbol;
    //     const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`;
    //     await axios.get(URL)
    //     .then((response) => {stockData[i].closingPrice = response.data.iexClose;});
    //     console.log('After ' + stockData[1].closingPrice);
    // }

    await Stock.deleteMany();

    const stocks = await Stock.insertMany(stockData);

    console.log(stockData.length)
    console.log('stocks seeded');
    process.exit(0);
});