import { director, sys } from 'cc';

import { CardDuel, Profile } from './lib/types';

export interface GameState {
	user?: Profile;
	duel?: CardDuel;
}

type BridgeSubscriber = (state: GameState) => void;

const listeners: BridgeSubscriber[] = [];
export const gameState: GameState = {};

export const subscribeBridge = (subscriber: BridgeSubscriber): void => {
	listeners.push(subscriber);
	subscriber(gameState);
};

export const send = (type: string, payload: Record<string, unknown>): void => {
	const data = JSON.stringify({ type, source: 'gameClient', ...payload });

	window.parent.postMessage(data, '*');
};

if (sys.isBrowser) {
	const messageHandler = (event: MessageEvent) => {
		const data = extractData(event.data);

		if (data.type === 'pushContext') {
			const { user, duel } = data;
			gameState.user = user;
			gameState.duel = duel;

			listeners.forEach((callback) => {
				callback(gameState);
			});

			director.loadScene('Duel');
		}
	};

	window.addEventListener('message', messageHandler);
	send('notifyReady', { flag: true });
}

const extractData = (data: string) => {
	try {
		return JSON.parse(data);
	} catch (error) {
		return data;
	}
};
