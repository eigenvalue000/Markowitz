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
