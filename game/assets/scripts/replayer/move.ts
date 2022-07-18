import Engine, { DuelCommand } from '@cocrafts/engine-card';
import { Animation, tween, Vec3 } from 'cc';

import { DuelProps } from '../lib/types';
import {
	getOrder,
	instantiateCard,
	linearSeat,
	relativePosition,
} from '../utils';

const { runCommand } = Engine;

export const run = async (
	props: DuelProps,
	command: DuelCommand,
): Promise<void> => {
	const { prefabs, nodes, user, snapshot } = props;
	const isPlayerCommand = command.owner === user.address;
	const updates = runCommand({ snapshot, command });
	const order = getOrder(command.owner, snapshot.player);
	const currentHand = updates.hand[order];
	const cardIndex = currentHand.length - 1;
	const card = currentHand[cardIndex];
	const currentNodes = isPlayerCommand ? nodes.player : nodes.opponent;

	return new Promise((resolve) => {
		const deckPos = relativePosition(currentNodes.deck, currentNodes.hand);
		const centralPos = relativePosition(nodes.guide.central, currentNodes.hand);
		const { node } = instantiateCard(prefabs.card, card, isPlayerCommand);

		node.setPosition(deckPos);
		node.parent = currentNodes.hand;

		if (isPlayerCommand) {
			const root = node.getChildByPath('root');
			const animation = root.getComponent('cc.Animation') as Animation;

			animation.getState('card-flip').speed = 1.5;
			animation.play('card-flip');

			const centralDest = linearSeat({
				central: centralPos,
				spacing: 200,
				length: 5,
				at: cardIndex,
			});

			const handDest = linearSeat({
				spacing: 100,
				length: 5,
				at: cardIndex,
				heightRange: -20,
				angleRange: -20,
			});

			tween(node)
				.to(
					0,
					{ scale: new Vec3(0.42, 0.32) },
					{ onComplete: () => (node.active = true) },
				)
				.to(
					1,
					{ position: centralDest.position, scale: new Vec3(0.6, 0.6) },
					{ easing: 'cubicInOut' },
				)
				.delay(3)
				.to(
					0.5,
					{
						position: handDest.position,
						scale: new Vec3(0.5, 0.5),
						angle: handDest.angle,
					},
					{ easing: 'cubicInOut' },
				)
				.start();
		} else {
			const handDest = linearSeat({
				spacing: 80,
				length: 5,
				at: cardIndex,
				heightRange: 16,
				angleRange: 12,
			});

			tween(node)
				.to(0, { scale: new Vec3(0.3, 0.25) })
				.to(1, {
					position: handDest.position,
					scale: new Vec3(0.35, 0.35),
					angle: handDest.angle,
				})
				.start();
		}

		props.snapshot = { ...props.snapshot, ...updates };
		setTimeout(() => resolve(), 250);
	});
};

export default run;
