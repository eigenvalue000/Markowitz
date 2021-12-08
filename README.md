# Markowitz

## Author

## Description
Markowitz is an application that aims to help make investment decisions by getting historical prices for a stock along with measuring the expected
return and variance of the daily returns of the stock. This is 
accomplished by allowing the user to first decide how many stocks
will be in their portfolio. Next, a form will generate which requires
the user to enter in the stock symbols corresponding to the stocks
in their portfolio. Once the form is filled out, the form then sends
the list of stock symbols to the back-end. The back-end fetches
the historical prices for each stock symbol using the IEX/Polygon.io api and stores 
them in the user's account. The daily returns are calculated and 
stored in the user's account. The expected return is calculated 
for the set containing the daily returns. The variance is also 
calculated for the set containing the daily returns. The expected
return and the variance is sent to the front-end to be displayed
on the client.

## Installation

## Usage

## License

## How To Contribute

## Tests

## Questions
