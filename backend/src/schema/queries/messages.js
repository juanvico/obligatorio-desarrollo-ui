const {
    GraphQLNonNull, GraphQLList
  } = require('graphql');
  const checkAuth = require('../../middlewares/checkAuth');
  
  const Message = require('../../models/message');
  const MessageType = require('../types/messageType');
  
  module.exports = {
    type: new GraphQLNonNull(GraphQLList(MessageType)),
    args: {},
    async resolve(_value, _args, context) {
      try {
        await checkAuth(context)
        const messages = await Message.find({});
        return messages
      }
      catch (ex) {
        console.log("Error getting items", ex.stack);
      }
    }
  };