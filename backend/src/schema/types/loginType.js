const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Login',
  fields: () => ({
    token: {
      type: new GraphQLNonNull(GraphQLString)
    },
  })
});