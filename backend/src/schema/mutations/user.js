const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const bcrypt = require('bcrypt');

const User = require('../../models/User');
const UserType = require('../types/userType');

const {
  SALT,
} = process.env;

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
      const { email, password, name } = args;
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await new User({ name, email: email.toLowerCase(), password: hashedPassword })
      return user.save();
    } catch (ex) {
      throw ex
    }
  }

}
