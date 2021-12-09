const { default: axios } = require('axios');
const { Stock } = require('../models');


const resolvers = {
  Query: {
    stocks: async () => {
      return await Stock.find({});
    },
    stock: async (parent, { symbol }) => {
      return await Stock.findOne({ symbol });
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
      await axios.get(URL).then((res) => {
        console.log(res.data.iexClose);
        temp = res.data.iexClose;
      });
      return Stock.findOneAndUpdate(
        { symbol: `${symbol}` },
        { closingPrice: temp },
        { new: true }
      );
    },
    getHistoricalPrices: async (parent, { symbol }) => {
      const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';
      const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/5d?token=${apiKey}`;
      var historicalPrices = [];
      await axios.get(URL).then((res) => { 
        for (let i = 0; i < res.data.length; i++) {
          console.log(res.data[i]);
          historicalPrices.push(res.data[i].close);
        }
         });
      console.log(historicalPrices);
      return Stock.findOneAndUpdate({ symbol: `${symbol}`},
      { priceHistory: historicalPrices },
      { new: true });
    },
    getPreviousClose: async (parent, { symbol }) => {
      const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';
      const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/2d?token=${apiKey}`;
      var previousPrice = -1;
      await axios.get(URL).then((res) => {
        console.log(res.data[0].close);
        previousPrice = res.data[0].close;
      });
      console.log(previousPrice);
      return Stock.findOneAndUpdate({ symbol: `${symbol}` }, 
      { previousClose: previousPrice }, 
      { new: true });
    },
    removeStock: async (parent, { symbol }) => {
      return Stock.findOneAndDelete({ symbol });
    }

  },
};

module.exports = resolvers;
