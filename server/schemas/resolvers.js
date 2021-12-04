const { Stock } = require('../models');

const resolvers = {
  Query: {
      stocks: async () => {
          return await Stock.find({})
      }
  }, 
  Mutation: {
      addStock: async (parent, { symbol }) => {
          return await Stock.create({ symbol });
      },
  },
};

module.exports = resolvers;