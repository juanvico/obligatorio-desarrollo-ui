const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean,
  graphql,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'ItemType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
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
      type: new GraphQLNonNull(GraphQLFloat)
    },
    pickup_location_longitude: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    pickup_location_description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    available_to_pickup: {
      type: GraphQLBoolean
    },
    user_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    user_email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});