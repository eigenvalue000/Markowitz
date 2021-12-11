import { gql } from '@apollo/client';

export const UPDATE_STOCK = gql`
  mutation updateStock($symbol: String!) {
    updateStock(symbol: $symbol) {
      symbol
      closingPrice
      previousClose
    }
  }
`

export const UPDATE_PREVIOUS = gql`
  mutation getPreviousClose($symbol: String!) {
    getPreviousClose(symbol: $symbol) {
      symbol
      closingPrice
      previousClose
    }
  }
`

export const UPDATE_HISTORY = gql`
  mutation getHistoricalPrices($symbol: String!) {
    getHistoricalPrices(symbol: $symbol) {
      symbol
      priceHistory
    }
  }
`
export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
mutation updatePortfolio($email: String!, $portfolio: [String]) {
  updatePortfolio(email: $email, portfolio: $portfolio) {
    email
    portfolio
  }
}
`
export const ADD_STOCK = gql`
mutation addStock($symbol: String!) {
  addStock(symbol: $symbol) {
    symbol
  }
}
`
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
