import { Card, cardConfigs } from './cards';
/* naming convention <--
 * 1. cardId/4: 0001 -> 9999
 * 2. rarities/1: common/1, magic/2, rare/3, unique/4, mystic/5, legendary/6
 * 3. elemental/1: metal/1, tree/2, water/3, fire/4, earth/5, dark/6, light/7
 * [cardId/4][rarity/1][elemental/1] */

export const allCards: Card[] = cardConfigs.map((i) => {
	return {
		...i,
		attack: i.attack?.[0],
		health: i.health?.[0],
		defense: i.defense?.[0],
		cooldown: i.cooldown?.[0],
	} as Card;
});

export const drawCards = (
	originalCards: Card[] = allCards,
	count = 5,
): { deckCards: Card[]; pickedCards: Card[] } => {
	const deckCards: Card[] = [];
	const pickedCards: Card[] = [];
	const pickedPositions: number[] = [];

	const pickUniquePosition = (): number => {
		const next = Math.floor(Math.random() * originalCards.length);
		const withoutVisual = originalCards[next].visualUri === undefined;

		if (pickedPositions.indexOf(next) >= 0 || withoutVisual) {
			return pickUniquePosition();
		}

		return next;
	};

	for (let i = 0; i < count; i += 1) {
		pickedPositions.push(pickUniquePosition());
	}

	for (let i = 0; i < originalCards.length; i += 1) {
		if (pickedPositions.indexOf(i) >= 0) {
			pickedCards.push(originalCards[i]);
		} else {
			deckCards.push(originalCards[i]);
		}
	}

	return {
		deckCards,
		pickedCards,
	};
};

// const { deckCards, pickedCards } = drawCards();
// console.log(deckCards.length, pickedCards.length, pickedCards);

export * from './cards';
