const db = require('./connection');
const { User, Stock } = require('../models');

db.once('open', async () => {
    await Stock.deleteMany();

    const stock = await Stock.insertMany([
        {symbol: 'MSFT'},
        {symbol: 'AMZN'},
        {symbol: 'JPST'}
    ]);

});