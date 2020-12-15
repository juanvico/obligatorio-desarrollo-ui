const {
  GraphQLNonNull, GraphQLList, GraphQLFloat
} = require('graphql');
const geolib = require('geolib');
const checkAuth = require('../../middlewares/checkAuth');

const Item = require('../../models/Item');
const ItemType = require('../types/itemType');

module.exports = {
  type: new GraphQLNonNull(GraphQLList(ItemType)),
  args: {
    lat: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    lng: {
      type: new GraphQLNonNull(GraphQLFloat)
    },

  },
  async resolve(_value, _args, context) {
    try {
      const { lat, lng } = _args;
      await checkAuth(context)
      const items = await Item.find({ user_email: { $ne: context.loggedUser.email } });
      if (items.length === 0) return [];
      const itemsLatLong = items.map(({ pickup_location_latitude, pickup_location_longitude }) => ({ latitude: pickup_location_latitude, longitude: pickup_location_longitude }))
      const result = geolib.orderByDistance({ latitude: lat, longitude: lng }, itemsLatLong);

      return await Promise.all(
        result.map(
          ({ latitude, longitude }) => Item.findOne({ 
              pickup_location_latitude: parseFloat(latitude),
              pickup_location_longitude: parseFloat(longitude) 
            })));
    }
    catch (ex) {
      console.log("Error getting items", ex.stack);
    }
  }
};