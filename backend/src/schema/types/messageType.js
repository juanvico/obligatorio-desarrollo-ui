const {
    GraphQLObjectType,
    GraphQLString,  
    GraphQLList,
    GraphQLNonNull,
  } = require('graphql');
  
  module.exports = new GraphQLObjectType({
    name: 'MessageType',
    fields: () => ({
      _id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      destinatary_user_email: {
        type: new GraphQLNonNull(GraphQLString)
      },
      item_id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      detail: {
        type: new GraphQLNonNull(GraphQLString)
      },
      remitent_user_name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      remitent_user_email: {
        type: new GraphQLNonNull(GraphQLString)
      }
    })
  });