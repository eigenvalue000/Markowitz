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

// export const QUERY_STOCK = gql`
// query stocks($symbol: String!) {
//   stocks(symbol: $symbol) {
//     symbol
//     closingPrice
//     previousClose
//     priceHistory
//   }
// }`
