const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    createUser: require('./mutations/user'),
  }
});

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    user: require('./queries/user'),
  }
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
