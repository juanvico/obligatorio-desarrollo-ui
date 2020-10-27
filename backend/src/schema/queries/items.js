const {
  GraphQLNonNull, GraphQLList
} = require('graphql');
const checkAuth = require('../../middlewares/checkAuth');

const Item = require('../../models/Item');
const ItemType = require('../types/itemType');

module.exports = {
  type: new GraphQLNonNull(GraphQLList(ItemType)),
  args: {},
  async resolve(_value, _args, context) {
    try {
      await checkAuth(context)
      const items = await Item.find({});
      return items
    }
    catch (ex) {
      console.log("Error getting items", ex.stack);
    }
  }
};