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
