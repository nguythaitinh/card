import { DuelCommand, DuelState } from '@cocrafts/engine-card';
import { Node, Prefab } from 'cc';

import { CardDuel, Profile } from './graphql';

export interface BoardNodes {
	player: {
		deck?: Node;
		hand?: Node;
	};
	opponent: {
		deck?: Node;
		hand?: Node;
	};
}

export interface DuelProps {
	user?: Profile;
	duel?: CardDuel;
	snapshot?: DuelState;
	history: {
		remote: Array<DuelCommand[]>;
		inner: Array<DuelCommand[]>;
	};
	prefabs: {
		card?: Prefab;
	};
	nodes: BoardNodes;
}

export * from './graphql';
