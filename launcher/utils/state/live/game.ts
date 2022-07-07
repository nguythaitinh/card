import { graphQlClient } from 'utils/graphql';
import * as mutations from 'utils/graphql/mutation';
import { MetacraftGames } from 'utils/types/graphql';

export const sendGameInvitation = async (opponent: string): Promise<void> => {
	await graphQlClient.mutate({
		mutation: mutations.inviteGame,
		variables: {
			input: {
				game: MetacraftGames.Card,
				opponent,
			},
		},
	});
};
