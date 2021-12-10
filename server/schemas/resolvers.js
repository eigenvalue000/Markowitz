const { default: axios } = require('axios');
const { Stock, User } = require('../models');
const math = require('mathjs');

const resolvers = {
  Query: {
    stocks: async () => {
      return await Stock.find({});
    },
    users: async () => {
      return await User.find({});
    },
    stock: async (parent, { symbol }) => {
      return await Stock.findOne({ symbol });
    }
  },
  Mutation: {
    addStock: async (parent, { symbol, closingPrice, previousClose, priceHistory }) => {
      return await Stock.create({ symbol, closingPrice, previousClose, priceHistory });
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email, password });

      if (!user) {
        throw new AuthenticationError('Incorrect login');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect login');
      }

      const token = signToken(user);

      return { token, user };
    },
    updateStock: async (parent, { symbol }) => {
      const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';
      const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`;
      var temp = 1;
      await axios.get(URL).then((res) => {
        console.log(res.data.iexClose);
        temp = res.data.iexClose;
      });
      return Stock.findOneAndUpdate(
        { symbol: `${symbol}` },
        { closingPrice: temp },
        { new: true }
      );
    },
    getHistoricalPrices: async (parent, { symbol }) => {
      const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';
      const timeRange = '1' + 'm';
      const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeRange}?token=${apiKey}`;
      var historicalPrices = [];
      var labelDates = [];
      var dayReturns = [];
      var avgReturn = -1
      await axios.get(URL).then((res) => {
        //console.log(res.data.length)
        //console.log(res)
        for (let i = 0; i < res.data.length; i++) {
          // console.log(i, res.data[i].date);
          historicalPrices.push(res.data[i].close);
          labelDates.push(res.data[i].date);
        }
      });
      // console.log(historicalPrices);
      // Generate daily returns array
      for (let i = 0; i < historicalPrices.length; i++) {
        if (i === 0) {
          dayReturns[0] = 0;
          continue;
        }
        dayReturns[i] = (historicalPrices[i] - historicalPrices[i - 1]) / historicalPrices[i - 1];
      }
      console.log(math.round(math.mean(dayReturns) * 10000) / 10000);

      labelDates.pop();
      return Stock.findOneAndUpdate({ symbol: `${symbol}` },
        {
          priceHistory: historicalPrices,
          dateLabels: labelDates,
          dailyReturns: dayReturns,
          meanReturn: (math.round(math.mean(dayReturns) * 10000) / 10000) * 100
        },
        { new: true });
    },
    getPreviousClose: async (parent, { symbol }) => {
      const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';
      const timeRange = '5' + 'd';
      const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeRange}?token=${apiKey}`;
      var previousPrice = -1;
      await axios.get(URL).then((res) => {
        console.log(res.data[0].close);
        previousPrice = res.data[0].close;
      });
      console.log(previousPrice);
      return Stock.findOneAndUpdate({ symbol: `${symbol}` },
        { previousClose: previousPrice },
        { new: true });
    },
    removeStock: async (parent, { symbol }) => {
      return Stock.findOneAndDelete({ symbol });
    },
    addUser: async (parent, { userName, password, email, portfolio }) => {
      return User.create({userName, password, email, portfolio});
    }

  },
};

module.exports = resolvers;
