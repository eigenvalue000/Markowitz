const { Stock } = require('../models');

const resolvers = {
  Query: {
      stocks: async () => {
          return await Stock.find({})
      }
  }, 
  Mutation: {
      addStock: async (parent, { symbol, closingPrice, previousClose, priceHistory }) => {
          return await Stock.create({ symbol, closingPrice, previousClose, priceHistory });
      },
  },
};

module.exports = resolvers;