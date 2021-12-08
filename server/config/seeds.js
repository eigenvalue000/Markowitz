const db = require('./connection');
const { User, Stock } = require('../models');

db.once('open', async () => {
    await Stock.deleteMany();
    await User.deleteMany();

    const stock = await Stock.insertMany([
        {symbol: 'MSFT'},
        {symbol: 'AMZN'},
        {symbol: 'JPST'}
    ]);

    const user = await User.insertMany([
        {
            username: 'user1', 
            email: 'user1@email.com', 
            password: 'pswrd',
            // portfolio: [''],
        },

        console.log('users seeded')
    ]);

    console.log('stocks seeded')
});
