const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Stock {
    _id: ID
    symbol: String!
    closingPrice: Float
    previousClose: Float
    priceHistory: [Float]
  }

  type Query {
    stocks: [Stock]
    stock(symbol: String!): Stock
  }

  type Mutation {
    addStock(symbol: String!, closingPrice: Float, previousClose: Float): Stock
    updateStock(symbol: String!): Stock
    removeStock(symbol: String!): Stock
  }

`;

module.exports = typeDefs;
