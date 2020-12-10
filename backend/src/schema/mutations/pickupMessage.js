const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
  } = require('graphql');
  
  const PickupMessageType = require('../types/pickupMessageType');
  const PickupMessage = require('../../models/PickupMessage');
  const checkAuth = require('../../middlewares/checkAuth');
  
  module.exports = {
    type: new GraphQLNonNull(PickupMessageType),
    args: {
        destinatary_user_email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    async resolve(value, args, context) {
      try {
        await checkAuth(context)
        const message = new PickupMessage({ ...args, user_name: context.loggedUser.name, user_email: context.loggedUser.email, })
        await message.save();
        return message;
      } catch (ex) {
        throw ex
      }
    }
  
  }
  