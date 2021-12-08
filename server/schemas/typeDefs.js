const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    orders: [Order]
  }

  type Stock {
    symbol: String!
  }

  type Query {
    
    users: [User]
  }

  type Mutation {
    addUser(): User
  }
`;

module.exports = typeDefs;