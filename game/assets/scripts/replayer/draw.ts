import { DuelCommand } from '@cocrafts/engine-card';

import { DuelProps } from '../lib/types';

export const run = async (
	{ nodes }: DuelProps,
	command: DuelCommand,
): Promise<void> => {
	console.log('hmm', command);
};

export default run;
