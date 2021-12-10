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
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`
