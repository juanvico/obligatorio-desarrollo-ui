var jwt = require('jsonwebtoken');
const User = require('../models/User');

const {
  JWT_SECRET
} = process.env

const checkAuth = async (context) => {
  if (!context.headers || !context.headers["authorization"]) {
    throw Error("Missing authorization header in request");
  }
  const accessToken = context.headers["authorization"];
  const decoded = await jwt.verify(accessToken, JWT_SECRET);
  const loggedUser = await User.findById(decoded.userId)
  context.loggedUser = loggedUser
}

module.exports = checkAuth