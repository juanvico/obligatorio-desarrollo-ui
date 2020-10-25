const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const User = require('../../models/User');

const UserType = require('../types/userType');

module.exports = {
  type: new GraphQLNonNull(UserType),
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
  },
  async resolve(value, args) {
    try {
      const user = await new User(args);
      return user
    } catch (ex) {
      throw ex
    }
  }

}
