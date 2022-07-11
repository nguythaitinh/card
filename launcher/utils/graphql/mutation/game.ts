import { gql } from '@apollo/client';

export const inviteGame = gql`
	mutation InviteGame($input: InviteGameInput!) {
		inviteGame(input: $input) {
			game
		}
	}
`;

export const acceptGame = gql`
	mutation AcceptGame($invitationId: String!) {
		acceptGame(invitationId: $invitationId)
	}
`;
