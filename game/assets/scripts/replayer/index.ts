import { DuelCommand } from '@cocrafts/engine-card';

import { DuelProps } from '../lib/types';

import draw from './draw';

export const playCommands = async (
	props: DuelProps,
	batches: Array<DuelCommand[]>,
): Promise<void> => {
	for (let i = 0; i < batches.length; i += 1) {
		const commands = batches[i];

		for (let z = 0; z < commands.length; z += 1) {
			await draw(props, commands[i]);
		}
	}
};
