const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'ItemType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
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