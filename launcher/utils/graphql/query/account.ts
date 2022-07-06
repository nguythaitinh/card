import { gql } from '@apollo/client';

export const accountFields = gql`
	fragment AccountFields on Account {
		id
		address
		name
		avatarUrl
		githubUrl
		mineral
		isOnline
	}
`;

export const account = gql`
	${accountFields}
	query Account {
		account {
			...AccountFields
		}
	}
`;

export const buddies = gql`
	${accountFields}
	query Buddies {
		buddies {
			...AccountFields
		}
	}
`;
