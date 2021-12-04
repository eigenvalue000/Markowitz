// const { AuthenticationError } = require('apollo-server-express');
const { Stock } = require('../models');
// const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    }
  },
  Mutation: {}
};

module.exports = resolvers;