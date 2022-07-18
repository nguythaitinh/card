import { DuelCommand, DuelState, GameMeta } from '@cocrafts/engine-card';
import { Node, Prefab, Vec3 } from 'cc';

import { CardDuel, Profile } from './graphql';

export interface BoardNodes {
	guide: {
		screen?: Node;
		central?: Node;
		left?: Node;
		right?: Node;
	};
	screen?: Node;
	player: {
		deck?: Node;
		hand?: Node;
	};
	opponent: {
		deck?: Node;
		hand?: Node;
	};
}

export interface OrderPair {
	player: number;
	opponent: number;
}

export interface DuelProps {
	user?: Profile;
	duel?: CardDuel;
	orderPair?: OrderPair;
	meta?: GameMeta;
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

export interface AngledPosition {
	position: Vec3;
	angle: number;
}

export * from './graphql';
