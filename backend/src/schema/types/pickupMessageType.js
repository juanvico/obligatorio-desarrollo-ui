const {
    GraphQLObjectType,
    GraphQLString,  
    GraphQLList,
    GraphQLNonNull,
  } = require('graphql');
  
  module.exports = new GraphQLObjectType({
    name: 'PickupMessageType',
    fields: () => ({
      _id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      destinatary_user_email: {
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        type: new GraphQLNonNull(GraphQLString)
      },
      user_name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      user_email: {
        type: new GraphQLNonNull(GraphQLString)
      }

    })
  });