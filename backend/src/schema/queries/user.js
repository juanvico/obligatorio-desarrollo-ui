const {
	GraphQLString,
	GraphQLNonNull
} = require('graphql');

const UserType = require('../types/userType');

module.exports = {
	type: new GraphQLNonNull(UserType),
	args: {
		userId: {
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	async resolve(value, args) {
		try {
			return value
		}
		catch (ex) {
			console.log("Error when getting User", ex.stack);
		}
	}
};