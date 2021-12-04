const db = require('./connection');
const { Stock } = require('../models');

const stockData = [{symbol: 'MSFT', closingPrice: 100},
{symbol: 'AMZN', closingPrice: 1000},
{symbol: 'JPST', closingPrice: 50}
];

db.once('open', async () => {
    await Stock.deleteMany();

    const stocks = await Stock.insertMany(stockData);

    console.log('stocks seeded');
    process.exit(0);
});