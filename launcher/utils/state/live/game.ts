import { navigate } from 'stacks/Browser/shared';
import { graphQlClient } from 'utils/graphql';
import * as mutations from 'utils/graphql/mutation';
import { CardDuelHistory, MetacraftGames } from 'utils/types/graphql';

import { liveState } from './internal';

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

export const acceptGameInvitation = async (
	invitationId: string,
): Promise<void> => {
	await graphQlClient.mutate({
		mutation: mutations.acceptGame,
		variables: { invitationId },
	});

	liveState.gameInvites = liveState.gameInvites.filter(
		(i) => i.id !== invitationId,
	);
};

export const resumePlayingGame = async (
	history: CardDuelHistory,
): Promise<void> => {
	navigate('Game', { id: history.id } as never);
};
