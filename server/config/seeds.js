const db = require('./connection');
const { Stock } = require('../models');

const stockData = [{symbol: 'MSFT', closingPrice: 100, previousClose: 50},
{symbol: 'AMZN', closingPrice: 1000, previousClose: 500},
{symbol: 'JPST', closingPrice: 50, previousClose: 25}
];

db.once('open', async () => {
    await Stock.deleteMany();

    const stocks = await Stock.insertMany(stockData);

    console.log('stocks seeded');
    process.exit(0);
});