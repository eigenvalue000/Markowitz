const db = require('./connection');
const { Stock } = require('../models');

const stockData = [{symbol: 'MSFT', closingPrice: 100, previousClose: 50},
{symbol: 'AMZN', priceHistory: [1, 2, 3]},
{symbol: 'JPST'}
];

db.once('open', async () => {
    await Stock.deleteMany();

    const stocks = await Stock.insertMany(stockData);

    console.log('stocks seeded');
    process.exit(0);
});