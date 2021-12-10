const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Stock {
    _id: ID
    symbol: String!
    closingPrice: Float
    previousClose: Float
    priceHistory: [Float]
    dateLabels: [String]
    dailyReturns: [Float]
    meanReturn: Float
  }

  type User {
    _id: ID
    userName: String!
    password: String!
    email: String!
    portfolio: [String]
  }

  type Query {
    stocks: [Stock]
    stock(symbol: String!): Stock
    users: [User]
    user(_id: ID): User
  }

  type Mutation {
    addStock(symbol: String!, closingPrice: Float, previousClose: Float): Stock
    updateStock(symbol: String!): Stock
    getHistoricalPrices(symbol: String!): Stock
    getPreviousClose(symbol: String!): Stock
    removeStock(symbol: String!): Stock
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
