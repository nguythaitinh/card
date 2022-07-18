import Engine, { DuelCommand } from '@cocrafts/engine-card';
import { Animation, tween, Vec3 } from 'cc';

import { DuelProps } from '../lib/types';
import { getOrder, instantiateCard, linearPositionAt } from '../utils';

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
		const deckPos = currentNodes.deck.getWorldPosition();
		const handPos = currentNodes.hand.getWorldPosition();
		const centralPos = nodes.guide.central.getWorldPosition();

		const { node } = instantiateCard(prefabs.card, card, isPlayerCommand);
		const root = node.getChildByPath('root');
		const animation = root.getComponent('cc.Animation') as Animation;

		node.setPosition(deckPos);
		node.parent = nodes.guide.screen;
		animation.getState('card-flip').speed = 1.5;
		animation.play('card-flip');

		if (isPlayerCommand) {
			const centralDest = linearPositionAt(centralPos, 200, 5, cardIndex, 0, 0);
			const handDest = linearPositionAt(handPos, 100, 5, cardIndex, -20, -12);

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
			const handDest = linearPositionAt(handPos, 80, 5, cardIndex, 16, 12);

			tween(node)
				.to(0, { scale: new Vec3(0.3, 0.25) })
				.to(1, {
					position: handDest.position,
					scale: new Vec3(0.35, 0.35),
					angle: handDest.angle,
				})
				.start();
		}

		setTimeout(() => resolve(), 250);

		props.snapshot = { ...props.snapshot, ...updates };
	});
};

export default run;
