const { productSchema, userSchema } = require('../models');

const resolvers = {
  Query: {
    Product: async () => {
      return productSchema.find({});
    },
    userNames: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return userSchema.find(params);
    },
  },
};

module.exports = resolvers;
