import { _decorator, Component, Node, Prefab } from 'cc';

import { DuelProps } from './lib/types';

const { ccclass, property } = _decorator;

@ccclass('DuelManager')
export class DuelManager extends Component {
	@property(Prefab)
	cardPrefab: Prefab;

	@property(Node)
	playerDeck: Node = null;
	@property(Node)
	opponentDeck: Node = null;

	@property(Node)
	playerHand: Node = null;
	@property(Node)
	opponentHand: Node = null;

	props: DuelProps = {
		player: {},
		opponent: {},
	};

	onLoad(): void {
		this.props = {
			cardPrefab: this.cardPrefab,
			player: {
				deck: this.playerDeck,
				hand: this.playerHand,
			},
			opponent: {
				deck: this.opponentDeck,
				hand: this.opponentHand,
			},
		};
	}

	start(): void {}

	update(deltaTime: number): void {}
}
