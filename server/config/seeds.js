const db = require('./connection');
const { Stock } = require('../models');

const stockData = [{symbol: 'MSFT'},
{symbol: 'AMZN'},
{symbol: 'JPST'}];

db.once('open', async () => {
    await Stock.deleteMany();

    const stocks = await Stock.insertMany(stockData);

    console.log('stocks seeded');
    process.exit(0);
});