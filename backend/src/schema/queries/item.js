const {
  GraphQLNonNull, GraphQLString
} = require('graphql');
const checkAuth = require('../../middlewares/checkAuth');

const Item = require('../../models/Item');
const ItemType = require('../types/itemType');

module.exports = {
  type: new GraphQLNonNull(ItemType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
  },
  async resolve(_value, args, context) {
    try {
      await checkAuth(context)
      const item = await Item.findById(args.id);
      return item
    }
    catch (ex) {
      console.log("Error getting items", ex.stack);
    }
  }
};