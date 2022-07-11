import { gql } from '@apollo/client';

export const cardDuelPlaying = gql`
	query CardDuelPlaying {
		cardDuelPlaying {
			opponent {
				id
				name
				avatarUrl
			}
			timestamp
		}
	}
`;
