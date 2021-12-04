const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Stock {
    symbol: String!
  }

  type Query {
    stocks: [Stock]
  }


`;

module.exports = typeDefs;