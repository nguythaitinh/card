import { gql } from '@apollo/client';

export const gameInvitations = gql`
	query GameInvitations {
		gameInvitations {
			game
			owner {
				id
				address
				name
				avatarUrl
			}
		}
	}
`;
