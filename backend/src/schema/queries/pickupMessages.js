const {
  GraphQLNonNull, GraphQLList
} = require('graphql');
const checkAuth = require('../../middlewares/checkAuth');

const PickupMessage = require('../../models/PickupMessage');
const PickupMessageType = require('../types/pickupMessageType');

module.exports = {
  type: new GraphQLNonNull(GraphQLList(PickupMessageType)),
  args: {},
  async resolve(_value, _args, context) {
    try {
      await checkAuth(context)
      const pickupMessages = await PickupMessage.find({});
      return pickupMessages
    }
    catch (ex) {
      console.log("Error getting pickup messages", ex.stack);
    }
  }
};