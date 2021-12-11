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
    userName: String
    password: String!
    email: String!
    portfolio: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    stocks: [Stock]
    stock(symbol: String!): Stock
    users: [User]
    user(_id: ID): User
    userEmail(email: String!): User
  }

  type Mutation {
    addStock(symbol: String!, closingPrice: Float, previousClose: Float): Stock
    updateStock(symbol: String!): Stock
    getHistoricalPrices(symbol: String!): Stock
    getPreviousClose(symbol: String!): Stock
    removeStock(symbol: String!): Stock
    updatePortfolio(email: String!, portfolio: [String]): User
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
