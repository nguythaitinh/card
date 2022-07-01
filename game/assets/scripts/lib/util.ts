import { Node } from 'cc';

export const bindWorldPosition = (
	from: Node,
	to: Node,
	delta: number,
	speed = 8,
) => {
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
