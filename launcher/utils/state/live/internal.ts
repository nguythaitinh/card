import { proxy } from 'valtio';
import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import * as subscriptions from 'utils/graphql/subscription';
import { GameInvitation } from 'utils/types/graphql';

export interface LiveState {
	gameInvites: GameInvitation[];
}

export const liveState = proxy<LiveState>({
	gameInvites: [],
});

const invitationObservable = graphQlClient.subscribe({
	query: subscriptions.gameInvitation,
	variables: { opponent: 'Google_111926221361135077737' },
});

invitationObservable.subscribe((payload) => {
	liveState.gameInvites.push(payload.data.gameInvitation);
});

graphQlClient.query({ query: queries.gameInvitations }).then((response) => {
	liveState.gameInvites = response?.data?.gameInvitations || [];
	console.log(response?.data?.gameInvitations);
});
