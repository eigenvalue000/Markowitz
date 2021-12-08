// const { AuthenticationError } = require('apollo-server-express');
const { Stock, User } = require('../models');
// const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    users: async () => {
      return await User.find({})
    }
  },
  Mutation: {}
};

module.exports = resolvers;