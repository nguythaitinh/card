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
	prefabs: {
		card?: Prefab;
	};
	nodes: BoardNodes;
}

export * from './graphql';
