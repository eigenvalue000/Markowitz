import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      firstName
      lastName
      email
      stocks {
        _id
        name
      }
    }
  }
`;

export const QUERY_STOCK = gql`
{
  stocks {
		symbol
    closingPrice
    previousClose
    priceHistory
    dateLabels
  }
}`


export const QUERY_STOCK_BY_SYMBOL = gql`
query stock($symbol: String!) {
  stock(symbol: $symbol) {
    symbol
    closingPrice
    previousClose
    priceHistory
    dateLabels
    meanReturn
  }
}`
