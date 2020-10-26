const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    createUser: require('./mutations/user'),
    login: require('./mutations/login'),
  }
});

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    me: require('./queries/me'),
  }
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
