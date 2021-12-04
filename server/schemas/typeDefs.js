const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Stock {
    symbol: String!
  }

  type Query {
    stocks: [Stock]
  }

  type Mutation {
    addStock(symbol: String!): Stock
  }

`;

module.exports = typeDefs;