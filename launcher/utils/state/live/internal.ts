import { proxy, subscribe } from 'valtio';
import { ObservableSubscription } from '@apollo/client';
import { BindDirections, modalActions } from '@metacraft/ui';
import GamePlayingModal from 'screens/Game/Dashboard/GamePlaying';
import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import * as subscriptions from 'utils/graphql/subscription';
import { accountState } from 'utils/state/account';
import { CardDuelHistory, GameInvitation } from 'utils/types/graphql';

export interface LiveState {
	gameInvites: GameInvitation[];
	gamePlaying?: CardDuelHistory;
}

export const liveState = proxy<LiveState>({
	gameInvites: [],
	gamePlaying: undefined,
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

		graphQlClient.query({ query: queries.gameInvitations }).then((response) => {
			liveState.gameInvites = response?.data?.gameInvitations || [];
		});

		graphQlClient.query({ query: queries.cardDuelPlaying }).then((response) => {
			const instance = response?.data?.cardDuelPlaying;

			if (instance) {
				modalActions.show({
					id: 'gamePlayingNotice',
					component: GamePlayingModal,
					context: instance,
					bindingDirection: BindDirections.BottomLeft,
				});
			}
		});

		lastAddress = nextAddress;
	}
});
