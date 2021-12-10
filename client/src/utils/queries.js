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
  }
}`


export const QUERY_STOCK_BY_SYMBOL = gql`
query stock($symbol: String!) {
  stock(symbol: $symbol) {
    symbol
    closingPrice
    previousClose
    priceHistory
  }
}`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
