import { gql } from '@apollo/client';

export const account = gql`
	query Account {
		account {
			id
			address
			name
			avatarUrl
			githubUrl
			mineral
		}
	}
`;
