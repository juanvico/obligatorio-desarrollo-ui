const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const ItemType = require('../types/itemType');
const Item = require('../../models/Item');
const checkAuth = require('../../middlewares/checkAuth');

module.exports = {
  type: new GraphQLNonNull(ItemType),
  args: {
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    image: {
      type: GraphQLNonNull(GraphQLString)
    },
    pickup_location: {
      type: new GraphQLNonNull(GraphQLString)
    },
    available_to_pickup: {
      type: GraphQLBoolean,
    },
  },
  async resolve(value, args, context) {
    try {
      await checkAuth(context)
      const item = new Item({ ...args, user_name: context.loggedUser.name, user_email: context.loggedUser.email, })
      await item.save();
      return item;
    } catch (ex) {
      throw ex
    }
  }

}
