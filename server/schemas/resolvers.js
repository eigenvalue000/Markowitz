const { Stock } = require('../models');

const resolvers = {
  Query: {
      stocks: async () => {
          return await Stock.find({})
      }
  }, 
  Mutation: {
      addStock: async (parent, { symbol, closingPrice }) => {
          return await Stock.create({ symbol, closingPrice });
      },
  },
};

module.exports = resolvers;