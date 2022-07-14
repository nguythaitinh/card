import { CardState, DuelState } from '@cocrafts/engine-card';

import { DuelProps } from '../lib/types';

import { getCardCurve, instantiateCard } from './util';

export const cleanUpDesignerElements = ({ nodes }: DuelProps): void => {
	nodes.player.hand?.children.map((i) => i.destroy());
	nodes.opponent.hand?.children.map((i) => i.destroy());
};

export const replicateDuel = (
	{ user, nodes, prefabs }: DuelProps,
	snapshot: DuelState,
): void => {
	const { player, hand } = snapshot;
	const playerFinder = (i) => i.id === user.address;
	const playerOrder = player.findIndex(playerFinder);
	const opponentOrder = playerOrder === 0 ? 1 : 0;
	const playerHand = hand[playerOrder];
	const opponentHand = hand[opponentOrder];
	const playerCardCurve = getCardCurve(playerHand.length, -24);
	const opponentCardCurve = getCardCurve(opponentHand.length, 20);

	playerCardCurve.forEach(({ height, angle }, i) => {
		const scale = 0.5;
		const card = playerHand[i] as CardState;
		const { node, manager } = instantiateCard(prefabs.card);

		manager.setCard(card, true);
		node.setScale(scale, scale);
		node.parent = nodes.player.hand;
		node.setPosition(0, height, 0);
		node.setRotationFromEuler(0, 0, angle);
		node.setSiblingIndex(i);
	});

	opponentCardCurve.forEach(({ height, angle }, i) => {
		const scale = 0.3;
		const card = playerHand[i] as CardState;
		const { node, manager } = instantiateCard(prefabs.card);

		manager.setCard(card, false);
		node.setScale(scale, scale);
		node.parent = nodes.opponent.hand;
		node.setPosition(0, height, 0);
		node.setRotationFromEuler(0, 0, angle);
	});
};
