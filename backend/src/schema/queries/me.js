const {
	GraphQLNonNull
} = require('graphql');
const checkAuth = require('../../middlewares/checkAuth');

const UserType = require('../types/userType');

module.exports = {
	type: new GraphQLNonNull(UserType),
	args: {},
	async resolve(_value, _args, context) {
		try {
			await checkAuth(context)
			return context.loggedUser
		}
		catch (ex) {
			console.log("Error when getting User", ex.stack);
		}
	}
};