const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    createUser: require('./mutations/user'),
    login: require('./mutations/login'),
    createItem: require('./mutations/item'),
    createPickupMessage: require('./mutations/pickupMessage'),
  }
});

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    me: require('./queries/me'),
    item: require('./queries/item'),
    items: require('./queries/items'),
    pickupMessages: require('./queries/pickupMessages'),
  }
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
