const {
    GraphQLNonNull, GraphQLList
  } = require('graphql');
  const checkAuth = require('../../middlewares/checkAuth');
  
  const Message = require('../../models/message');
  const MessageType = require('../types/messageType');
  // const UserType = require('../types/userType');

  module.exports = {
    type: new GraphQLNonNull(GraphQLList(MessageType)),
    args: {},
    async resolve(_value, _args, context) {
      try {
        await checkAuth(context)
        // const me = context.loggedUser.email
        const messages = await Message.find({});
        return messages
      }
      catch (ex) {
        console.log("Error getting messages", ex.stack);
      }
    }
  };