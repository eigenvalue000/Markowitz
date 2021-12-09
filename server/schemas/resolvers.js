const { default: axios } = require('axios');
const { Stock , User } = require('../models');


const resolvers = {
  Query: {
      stocks: async () => {
          return await Stock.find({});
      },
      users: async () => {
          return await User.find({});
      },
      stock: async (parent, {symbol}) => {
        return await Stock.findOne({symbol});
      }
  },
  Mutation: {
      addStock: async (parent, { symbol, closingPrice, previousClose, priceHistory }) => {
          return await Stock.create({ symbol, closingPrice, previousClose, priceHistory });
      },
      updateStock: async (parent, { symbol }) => {
        const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';
        const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`;
        var temp = 1;
        await axios.get(URL).then((res) => {console.log(res.data.iexClose);
        temp = res.data.iexClose;});
        return Stock.findOneAndUpdate(
            { symbol: `${symbol}` },
            { closingPrice: temp},
            { new: true }
        );
      },
      removeStock: async (parent, { symbol }) => {
          return Stock.findOneAndDelete({ symbol });
      }

  },
};

module.exports = resolvers;
