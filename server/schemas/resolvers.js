const { User, Book } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (p, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });

        return userData;
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    login: async (p, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (p, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (p, args, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$push: {savedBooks: args}},
          {runValidators: true, new: true }
          );
        return userData;
      }
      throw AuthenticationError;
    },
    removeBook: async (p, args, context) => {
      if (context.user) {
        const book = await User.findOneAndDelete({
          _id: context.book._id
        })
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
