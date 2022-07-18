import Engine, { DuelCommand } from '@cocrafts/engine-card';

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

		const { node, manager } = instantiateCard(
			prefabs.card,
			card,
			isPlayerCommand,
		);

		node.setPosition(deckPos);
		node.parent = nodes.guide.screen;

		if (isPlayerCommand) {
			const centralDA = linearPositionAt(centralPos, 200, 5, cardIndex, 0, 0);
			const handDA = linearPositionAt(handPos, 100, 5, cardIndex, -20, -12);

			manager.flipTo(centralDA, handDA);
		} else {
			const handDA = linearPositionAt(handPos, 80, 5, cardIndex, 16, 12);
			manager.moveTo(handDA);
		}

		setTimeout(() => resolve(), 250);

		props.snapshot = { ...props.snapshot, ...updates };
	});
};

export default run;
