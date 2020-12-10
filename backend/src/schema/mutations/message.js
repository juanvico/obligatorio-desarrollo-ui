const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLBoolean,
  } = require('graphql');
  
  const MessageType = require('../types/messageType');
  const Message = require('../../models/Message');
  const checkAuth = require('../../middlewares/checkAuth');
  
  module.exports = {
    type: new GraphQLNonNull(MessageType),
    args: {
        destinatary_user_email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        item_id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        detail: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    async resolve(value, args, context) {
      try {
        await checkAuth(context)
        const message = new Message({ ...args, remitent_user_name: context.loggedUser.name, remitent_user_email: context.loggedUser.email, })
        await message.save();
        return message;
      } catch (ex) {
        throw ex
      }
    }
  
  }
  