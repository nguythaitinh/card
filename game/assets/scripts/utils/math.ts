export interface CardCurve {
	angle: number;
	height: number;
}

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
