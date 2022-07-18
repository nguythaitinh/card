import { Vec3 } from 'cc';

import { AngledPosition } from '../lib/types';

export interface CardCurve {
	angle: number;
	height: number;
}

export const getCardCurve = (
	length: number,
	heightRange = 20,
	angleRange = 12,
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

const distanceFromCentral = (radius: number, currentIndex: number): number => {
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

export const linearDistribute = (
	central: Vec3,
	amount: number,
	spacing: number,
): Vec3[] => {
	const result: Vec3[] = [];
	const size = amount * spacing;
	const radius = size / 2;
	const leftMost = central.x - radius + spacing / 2;

	for (let i = 0; i < amount; i += 1) {
		result.push(new Vec3(leftMost + i * spacing, central.y, central.z));
	}

	return result;
};

export const linearPositionAt = (
	central: Vec3,
	spacing: number,
	totalAmount: number,
	currentIndex: number,
	heightRange = 0,
	angleRange = 0,
): AngledPosition => {
	const size = totalAmount * spacing;
	const radius = totalAmount / 2;
	const halfSize = size / 2;
	const leftMost = central.x - halfSize + spacing / 2;
	const distance = distanceFromCentral(radius, currentIndex);

	return {
		position: new Vec3(
			leftMost + currentIndex * spacing,
			central.y + heightRange * (Math.abs(distance) / radius),
			central.z,
		),
		angle: angleRange * (distance / radius),
	};
};
