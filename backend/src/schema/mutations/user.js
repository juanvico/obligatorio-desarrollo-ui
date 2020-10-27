const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require('../../models/User');
const CreateUserType = require('../types/createUserType');

const {
  JWT_SECRET,
} = process.env;

module.exports = {
  type: new GraphQLNonNull(CreateUserType),
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
      await user.save();
      const token = await jwt.sign({ userId: user._id }, JWT_SECRET);
      return { name: user.name, email: user.email, token }
    } catch (ex) {
      throw ex
    }
  }

}
