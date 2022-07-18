import { CardState, PlayerStatePair } from '@cocrafts/engine-card';
import { instantiate, Node, Prefab } from 'cc';

import { CardManager } from '../CardManager';
import { OrderPair } from '../lib/types';

interface CardInstantiate {
	node: Node;
	manager: CardManager;
}

interface InstantiateConfig {
	scale: number;
}

const playerInstantiate: InstantiateConfig = {
	scale: 0.5,
};

const opponentInstantiate: InstantiateConfig = {
	scale: 0.3,
};

export const instantiateCard = (
	prefab: Prefab,
	card: CardState,
	isPlayerCard: boolean,
): CardInstantiate => {
	const node = instantiate(prefab);
	const manager = node.getComponent('CardManager') as CardManager;
	const { scale } = isPlayerCard ? playerInstantiate : opponentInstantiate;

	manager.setCard(card, true);
	node.setScale(scale, scale);

	return {
		node,
		manager,
	};
};

export const getOrderPair = (
	userId: string,
	player: PlayerStatePair,
): OrderPair => {
	const playerIndex = player.findIndex((i) => i.id === userId);
	const opponentIndex = playerIndex === 0 ? 1 : 0;

	return {
		player: playerIndex,
		opponent: opponentIndex,
	};
};

export const getOrder = (userId: string, player: PlayerStatePair): number => {
	return player.findIndex((i) => i.id === userId);
};

export const sleep = (length: number): Promise<boolean> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(true), length);
	});
};
