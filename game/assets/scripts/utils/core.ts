import { instantiate, Node, Prefab } from 'cc';

import { CardManager } from '../CardManager';

interface CardInstantiate {
	node: Node;
	manager: CardManager;
}

export const instantiateCard = (prefab: Prefab): CardInstantiate => {
	const node = instantiate(prefab);
	const manager = node.getComponent('CardManager') as CardManager;

	return {
		node,
		manager,
	};
};
