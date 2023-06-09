import { gql } from '@apollo/client';

export default {
	Queries: {
		searchUsers: gql`
			query SearchUsers($username: String!) {
				searchUsers(username: $username) {
					id
					image
					username
				}
			}
		`,
	},
	Mutations: {
		createUsername: gql`
			mutation CreateUsername($username: String!) {
				createUsername(username: $username)
			}
		`,
	},
	Subscriptions: {},
};
