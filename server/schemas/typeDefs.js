const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Stock {
    symbol: String!
    closingPrice: Float
  }

  type Query {
    stocks: [Stock]
  }

  type Mutation {
    addStock(symbol: String!, closingPrice: Float): Stock
  }

`;

module.exports = typeDefs;