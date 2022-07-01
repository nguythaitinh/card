import { instantiate, Node } from 'cc';

import { Card } from '../lib';

import { CardController, CardPlace } from './CardController';

export const fillDeck = (deck: Node, amount = 10, step = -2): void => {
	const cardRef = deck.children[0];

	for (let i = 0; i < amount; i += 1) {
		const playerCard = instantiate(cardRef);

		playerCard.name = `card#${i}`;
		playerCard.parent = deck;
		// playerCard.setRotation(0, 0, i * 0.0005, 10);
		playerCard.setPosition(i / step, i / step);
	}
};

const sleep = (time: number) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(true), time);
	});
};

export const distributeCards = async (
	deck: Node,
	cards: Card[],
	scale = 0.6,
): Promise<void> => {
	const cardRef = deck.children[0];

	for (let i = 0; i < cards.length; i += 1) {
		const card = cards[i];
		const instance = instantiate(cardRef);

		instance.parent = deck.parent;
		instance.setWorldPosition(cardRef.worldPosition);
		instance.setScale(scale, scale);

		const ctrl = instance.getComponent('CardController') as CardController;
		ctrl.setCardInfo(card);
		ctrl.setPlace(CardPlace.Hand, i);

		await sleep(250);
	}
};
