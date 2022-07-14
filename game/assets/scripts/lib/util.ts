import { instantiate, Node, Prefab } from 'cc';

import { CardManager } from '../CardManager';

export const bindWorldPosition = (
	from: Node,
	to: Node,
	delta: number,
	speed = 8,
): void => {
	const progress = Math.min(delta * speed, 1);
	const xDiff = to.worldPosition.x - from.worldPosition.x;
	const yDiff = to.worldPosition.y - from.worldPosition.y;

	const xTranslate = xDiff * progress;
	const yTranslate = yDiff * progress;

	from.setWorldPosition(
		from.worldPosition.x + xTranslate,
		from.worldPosition.y + yTranslate,
		0,
	);

	from.setRotation(to.rotation.x, to.rotation.y, to.rotation.z, to.rotation.w);
};

interface FillRange {
	from: number;
	to: number;
}

export const getFillRange = (amount: number, total: number): FillRange => {
	const diff = total - amount;
	const padding = Math.floor(diff / 2);

	return {
		from: padding,
		to: padding + amount - 1,
	};
};

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

interface CardCurve {
	angle: number;
	height: number;
}

export const distanceFromCentral = (
	radius: number,
	currentIndex: number,
): number => {
	if (currentIndex == radius) {
		return 0;
	} else if (currentIndex >= radius * 2) {
		return radius;
	} else if (currentIndex > radius) {
		return currentIndex % radius;
	} else {
		return (currentIndex % radius) - radius;
	}
};

export const getCardCurve = (
	length: number,
	heightRange = -20,
	angleRange = -12,
	maxLength = 9,
): CardCurve[] => {
	const result: CardCurve[] = [];
	const radius = (maxLength - 1) / 2;
	const startingIndex = Math.floor((maxLength - length) / 2);

	for (let i = startingIndex; i < startingIndex + length; i += 1) {
		const distance = distanceFromCentral(radius, i);
		const height = heightRange * (Math.abs(distance) / radius);
		const angle = angleRange * (distance / radius);

		result.push({ height, angle });
	}

	return result;
};
