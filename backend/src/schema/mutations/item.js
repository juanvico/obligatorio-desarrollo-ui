const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');

const ItemType = require('../types/itemType');
const Item = require('../../models/Item');
const checkAuth = require('../../middlewares/checkAuth');

module.exports = {
  type: new GraphQLNonNull(ItemType),
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    image: {
      type: GraphQLNonNull(GraphQLString)
    },
    pickup_location_latitude: {
      type: new GraphQLNonNull(GraphQLString)
    },
    pickup_location_longitude: {
      type: new GraphQLNonNull(GraphQLString)
    },
    pickup_location_description: {
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
