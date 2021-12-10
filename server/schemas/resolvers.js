const { default: axios } = require('axios');
const { Stock , User } = require('../models');


const resolvers = {
  Query: {
      stocks: async () => {
          return await Stock.find({});
      },
      users: async () => {
          return await User.find({});
      },
      stock: async (parent, {symbol}) => {
        return await Stock.findOne({symbol});
      }
  },
  Mutation: {
      addStock: async (parent, { symbol, closingPrice, previousClose, priceHistory }) => {
          return await Stock.create({ symbol, closingPrice, previousClose, priceHistory });
      },
      updateStock: async (parent, { symbol }) => {
        const apiKey = 'pk_7c91c18fa8774e669a5df330e40a50b9';
        const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`;
        var temp = 1;
        await axios.get(URL).then((res) => {console.log(res.data.iexClose);
        temp = res.data.iexClose;});
        return Stock.findOneAndUpdate(
            { symbol: `${symbol}` },
            { closingPrice: temp},
            { new: true }
        );
      },
      removeStock: async (parent, { symbol }) => {
          return Stock.findOneAndDelete({ symbol });
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
      }
  },
};

module.exports = resolvers;
