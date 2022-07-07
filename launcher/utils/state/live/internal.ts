import { proxy, subscribe } from 'valtio';
import { ObservableSubscription } from '@apollo/client';
import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import * as subscriptions from 'utils/graphql/subscription';
import { accountState } from 'utils/state/account';
import { GameInvitation } from 'utils/types/graphql';

export interface LiveState {
	gameInvites: GameInvitation[];
}

export const liveState = proxy<LiveState>({
	gameInvites: [],
});

let invitationSub: ObservableSubscription;
let lastAddress = accountState.profile?.address;

subscribe(accountState, () => {
	const nextAddress = accountState.profile?.address;

	if (!!nextAddress && nextAddress !== lastAddress) {
		invitationSub?.unsubscribe();
		invitationSub = graphQlClient
			.subscribe({
				query: subscriptions.gameInvitation,
				variables: { opponent: nextAddress },
			})
			.subscribe(({ data }) => {
				liveState.gameInvites.push(data.gameInvitation);
			});

		lastAddress = nextAddress;
	}
});

graphQlClient.query({ query: queries.gameInvitations }).then((response) => {
	liveState.gameInvites = response?.data?.gameInvitations || [];
	console.log(response?.data?.gameInvitations);
});
