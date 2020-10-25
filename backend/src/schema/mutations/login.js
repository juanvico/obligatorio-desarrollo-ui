const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require('../../models/User');
const LoginType = require('../types/loginType');

const { JWT_SECRET } = process.env


module.exports = {
  type: new GraphQLNonNull(LoginType),
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
  },
  async resolve(value, args) {
    try {
      const { email, password } = args
      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user) throw Error('User does not exist');

      const correctPassword = await bcrypt.compare(password, user.password)
      if (!correctPassword) throw Error('Incorrect password');

      var token = await jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token }


    } catch (ex) {
      throw ex
    }
  }

}